const express = require("express")
const multer = require("multer")
const uploadMiddleware = multer({ dest: 'uploads/' });
const Post = require("../models/post")


const getPosts = (req, res) => {
    res.json("from controller")
};

const getPost = async (req, res) => {
    res.json("from controller")
};

const addPost = (req, res) => {
    res.json("from controller")
};

const deletePost = (req, res) => {
    res.json("from controller")
};
const updatePost = (req, res) => {
    res.json("from controller")
};

module.exports = {
    getPosts,
    getPost,
    addPost,
    deletePost,
    updatePost
};

