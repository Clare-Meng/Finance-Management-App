const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Define Routes
const spendingEntry = require('./routes/api/spendingEntry');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Database Configuration
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/spendingEntry', spendingEntry);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));