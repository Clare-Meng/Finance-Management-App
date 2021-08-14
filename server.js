const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

//Bodyparser Middleware
app.use(express.json());

// Database Configuration
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/spendingEntry', require('./routes/api/spendingEntry'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));