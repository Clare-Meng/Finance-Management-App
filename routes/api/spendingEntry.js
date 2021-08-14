const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Spending Entry Model
const SpendingEntry = require('../../models/SpendingEntry');

// GET api/spendingEntry
router.get('/', (req, res) => {
    SpendingEntry.find()
        .then(SpendingEntry => res.json(SpendingEntry))
});

// POST api/spendingEntry
// Private
router.post('/', auth, (req, res) => {
    const newSpendingEntry = new SpendingEntry({
        title: req.body.title,
        description: req.body.description,
        items: req.body.items
    });

    newSpendingEntry.save().then(SpendingEntry => res.json(SpendingEntry));
});

// DELETE api/spendingEntry/:id
// Private
router.delete('/:id', auth, (req, res) => {
    SpendingEntry.findById(req.params.id)
        .then(SpendingEntry => SpendingEntry.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// DELETE api/spendingEntry/item/:id
router.delete('/item/:id', (req, res) => {
    SpendingEntry.updateMany(
        { $pull: { items: { _id: req.params.id}}}
    )
    .then(SpendingEntry => res.json({success: true}))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;