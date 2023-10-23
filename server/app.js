const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const inventoryRouter = require('./routes/inventory');
const mongoose = require("mongoose");
const dotenv = require('dotenv'); // Import dotenv
dotenv.config();

const app = express();

// connect database
const url = process.env.MONGODB_URL;
mongoose.connect(url)
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((e) => {
        console.log("Failed to connect to database", e);
    })

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/inventory', inventoryRouter);

process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('Mongoose connection closed through app termination');
        process.exit(0);
    } catch (error) {
        console.error('Error while closing database connection:', error);
        process.exit(1);
    }
});

module.exports = app;
