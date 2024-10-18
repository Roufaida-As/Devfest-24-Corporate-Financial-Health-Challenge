from flask import Flask, request, jsonify
import pandas as pd
from pymongo import MongoClient
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')  # Adjust as needed
db = client['your_database_name']  # Replace with your database name
collection = db['TRANSACTION']  # Replace with your collection name

# Fetch user expenses from MongoDB
def fetch_user_expenses(user_id):
    expenses = list(collection.find({'userId': user_id, 'type': 'expense'}, {'amount': 1, 'category': 1, 'date': 1}))
    return pd.DataFrame(expenses)
# Route to get future insights using POST and userId in URL
@app.route('/future_insights/<user_id>', methods=['POST'])
def predict(user_id):
    # Connect to MongoDB
    

    # Fetch user's past expenses
    df = fetch_user_expenses(user_id)

    if df.empty:
        return jsonify({'error': 'No expenses found for the given userId'}), 404

    df['date'] = pd.to_datetime(df['date'])

    # Aggregate monthly expenses
    monthly_expenses = df.resample('M', on='date').sum().reset_index()
    monthly_expenses.columns = ['date', 'amount']

    # Split the data into training and testing sets (80% training, 20% testing)
    train_size = int(len(monthly_expenses) * 0.8)
    train_data = monthly_expenses[:train_size]
    test_data = monthly_expenses[train_size:]

    # Train the ARIMA model
    model = ARIMA(train_data['amount'], order=(5, 1, 0))
    model_fit = model.fit()

    # Forecast future values (e.g., next 3 months)
    forecast_steps = 3
    forecast = model_fit.forecast(steps=forecast_steps)

    # Evaluate the model on test data
    predictions = model_fit.forecast(steps=len(test_data))
    mse = mean_squared_error(test_data['amount'], predictions)
    print(f'Mean Squared Error: {mse}')

    # Create forecast data
    forecast_data = [{'date': monthly_expenses['date'].iloc[-1] + pd.DateOffset(months=i+1), 'amount': amount} 
                     for i, amount in enumerate(forecast)]

    # Insert the forecast data into a new collection or log it
    forecast_collection = db['FORECAST']  # Replace with the forecast collection name
    forecast_collection.insert_many(forecast_data)  # Insert the forecast data into the collection

    # Return the forecast data as a JSON response
    return jsonify({'future_insights': forecast_data, 'mse': mse})

# Recommendations function (for future use or another route)
@app.route('/recommendations/<user_id>', methods=['POST'])
def generate_recommendations(user_id):
    # Fetch user's past expenses
    df = fetch_user_expenses(user_id)

    if df.empty:
        return jsonify({'error': 'No expenses found for the given userId'}), 404

    # Convert date to datetime
    df['date'] = pd.to_datetime(df['date'])

    # Create monthly spending summary
    monthly_expenses = df.groupby([pd.Grouper(key='date', freq='M'), 'category']).sum().reset_index()
    monthly_expenses['month'] = monthly_expenses['date'].dt.to_period('M')
    monthly_expenses.drop('date', axis=1, inplace=True)

    # Pivot the DataFrame for model input
    monthly_pivot = monthly_expenses.pivot(index='month', columns='category', values='amount').fillna(0)

    # Assuming you have an average spending reference per category (this should be computed beforehand or dynamically)
    average_spending = monthly_pivot.mean()

    # Placeholder target column (You need to define what the "target_column" is)
    target_column = 'Total_Spending'  # Replace with the actual column name

    # Features and target (ensure 'target_column' exists)
    if target_column in monthly_pivot.columns:
        X = monthly_pivot.drop(target_column, axis=1)
        y = monthly_pivot[target_column]

        # Train-test split
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the Random Forest Regressor
        model = RandomForestRegressor(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)

        # Predict on the test set
        y_pred = model.predict(X_test)

        # Evaluate the model
        mse = mean_squared_error(y_test, y_pred)
        print(f'Mean Squared Error: {mse}')

        # Prepare future features (for demonstration purposes, we use the last known data)
        X_future = X.iloc[[-1]]  # Replace with actual future data preparation
        future_spending = model.predict(X_future)

        # Generate recommendations
        recommendations = {}
        for category, predicted_amount in zip(monthly_pivot.columns, future_spending):
            if category != target_column:  # Skip the target column
                if predicted_amount > average_spending[category]:
                    recommendations[category] = f"Consider reducing spending in {category} to stay within budget."
                else:
                    recommendations[category] = f"Your spending in {category} is within budget."

        return jsonify({
            'mse': mse,
            'future_spending': future_spending.tolist(),
            'recommendations': recommendations
        })

    else:
        return jsonify({'error': f'Target column "{target_column}" not found in data'}), 400

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7000)
