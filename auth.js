// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ name, email, password: hashedPassword });
//   await newUser.save();
//   res.json({ message: 'User Registered' });
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(400).json({ message: 'Invalid Credentials' });
//   }
//   const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
//   res.json({ token });
// });

// module.exports = router;

import express from 'express'
const router = express.Router();

router.post('/login', (req, res) => {
    res.json({ message: 'Login route' });
});

router.post('/register', (req, res) => {
    res.json({ message: 'Register route' });
});

module.exports = router;

