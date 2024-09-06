const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
    res.json({ message: 'GET all users' });
});

// GET a specific user by ID
router.get('/:id', (req, res) => {
    res.json({ message: `GET user with ID ${req.params.id}` });
});

// POST a new user
router.post('/', (req, res) => {
    res.json({ message: 'POST a new user' });
});

// PUT (update) a user
router.put('/:id', (req, res) => {
    res.json({ message: `PUT (update) user with ID ${req.params.id}` });
});

// DELETE a user
router.delete('/:id', (req, res) => {
    res.json({ message: `DELETE user with ID ${req.params.id}` });
});

module.exports = router;
