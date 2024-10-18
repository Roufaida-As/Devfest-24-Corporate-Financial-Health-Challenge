function calculatePercentageChange(weeklyData) {
    const weeklyDataWithPercentage = {};
    let previousWeek = null;

    for (const week in weeklyData) {
        weeklyDataWithPercentage[week] = { ...weeklyData[week], incomeChange: 0, expenseChange: 0 };

        if (previousWeek !== null) {
            const incomeDifference = weeklyData[week].income - weeklyData[previousWeek].income;
            weeklyDataWithPercentage[week].incomeChange = ((incomeDifference / weeklyData[previousWeek].income) * 100).toFixed(2);

            const expenseDifference = weeklyData[week].expenses - weeklyData[previousWeek].expenses;
            weeklyDataWithPercentage[week].expenseChange = ((expenseDifference / weeklyData[previousWeek].expenses) * 100).toFixed(2);
        }

        previousWeek = week;
    }

    return weeklyDataWithPercentage;
}

module.exports = calculatePercentageChange;
