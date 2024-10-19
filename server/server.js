const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const userRouter = require('./routes/user_router');
const transactionRouter = require('./routes/transactions_router');
const dashboardRouter = require('./routes/dashboard_router');
const transactionController = require('./controllers/transaction_controller');
const reportingRouter = require('./routes/reporting_router')

dotenv.config({ path: './.env' });
const port = process.env.PORT;

const app = express();
app.use(express.json());

const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIO(server);

transactionController.setSocketIO(io);


mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connected successfully');
}).catch((error) => {
    console.log(error);
});


app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/reporting', reportingRouter);

// Set up Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
