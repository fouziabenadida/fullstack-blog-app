const express = require("express")
const bcrypt = require('bcrypt');
const User = require('../models/auth')


const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Username and email password are required' });
        }
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }


};

const login = (req, res) => {

    res.send('User login');
};

const logout = (req, res) => {

    res.send('User logout');
};

module.exports = {
    register,
    login,
    logout,
};
