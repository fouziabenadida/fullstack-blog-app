const express = require("express")
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const User = require('../models/auth')


const register = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Username and email password are required' });
        }
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, salt),
        });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }


};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'user does not exist ' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'wrong user name or password' });
        }
        const token = jwt.sign({ username: user.username }, 'secretkey');

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({
            id: user._id,
            username,
        })

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }


};

const logout = (req, res) => {

    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
};

module.exports = {
    register,
    login,
    logout,
};
