const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Item Schema
const ItemSchema = new Schema({
    name: String,
    amount: Number
});

// Spending Entry Schema
const SpendingEntrySchema = new Schema({
    title: String,
    description: String,
    items: [ItemSchema]
});

module.exports = SpendingEntry = mongoose.model('SpendingEntry', SpendingEntrySchema);