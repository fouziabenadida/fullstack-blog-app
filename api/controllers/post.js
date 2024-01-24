const express = require("express")
const multer = require("multer")
const uploadMiddleware = multer({ dest: 'uploads/' });
const Post = require("../models/post")


const getPosts = (req, res) => {
    res.json("from controller")
};

const getPost = (req, res) => {
    res.json("from controller")
};

const addPost = async (req, res) => {
    try {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);

        const { title, category, content } = req.body;
        const postDoc = await Post.create({
            title,
            category,
            content,
            cover: newPath,
        })
        res.json(postDoc)
    } catch (error) {
        console.log(error)
    }


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

