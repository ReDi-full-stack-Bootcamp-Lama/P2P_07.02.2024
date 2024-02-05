/* const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the JSON file containing user data
const userDataPath = path.join(__dirname, '../data/users.json');

// Get all users
router.get('/', (req, res) => {
    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data);
        res.json(users);
    });
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.id === userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    });
});

// Create a new user
router.post('/', (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
    }

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data);
        const newUser = { id: users.length + 1, username, email };
        users.push(newUser);

        fs.writeFile(userDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.status(201).json(newUser);
        });
    });
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email } = req.body;

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let users = JSON.parse(data);
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        users[userIndex] = { id: userId, username, email };

        fs.writeFile(userDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json(users[userIndex]);
        });
    });
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let users = JSON.parse(data);
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        users.splice(userIndex, 1);

        fs.writeFile(userDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json({ message: 'User deleted successfully' });
        });
    });
});

module.exports = router;
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;


