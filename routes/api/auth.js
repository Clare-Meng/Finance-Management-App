const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

// @route          POST api/auth
// @description    Authenticate the user
// @access         Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Validate all Fields Exist
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields to register' });
    }

    // Check for an existing user 
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'The user does not exist' });

            // Validate the password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Credentials not valid'});

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
                })
        })
});

// @route          GET api/auth/user
// @description    Get the user data
// @access         Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;