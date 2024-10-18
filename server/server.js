const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const userRouter = require('./routes/user_router')
const transactionRouter = require('./routes/transactions_router')
const dashboardRouter = require('./routes/dashboard_router')

dotenv.config({ path: './.env' })
port = process.env.port

app.use(express.json())

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connected successfully')
}).catch((error) => {
    console.log(error)
})
app.use('/api/users', userRouter)
app.use('/api/transactions', transactionRouter)
app.use('/api/dashboard', dashboardRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
