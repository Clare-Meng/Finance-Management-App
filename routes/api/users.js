const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');

// @route          POST api/users
// @description    Register new user
// @access         Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Validate all Fields Exist
    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields to register' });
    }

    // Check for an existing user 
    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'The user already exists' });

            const newUser = new User({
                name,
                email,
                password
            });

            // Create salt and hash 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        user: {
                                            token,
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )        
                        });
                })
            })
        })
});

module.exports = router;