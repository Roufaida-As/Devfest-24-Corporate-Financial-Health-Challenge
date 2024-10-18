const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')

dotenv.config({ path: './.env' })
port = process.env.port

app.use(express.json())

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connected successfully')
}).catch((error) => {
    console.log(error)
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
