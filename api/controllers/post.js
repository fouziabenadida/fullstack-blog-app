const Post = require("../models/post")



const getPost = (req, res) => {

};
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addPost = async (req, res) => {
    const { title, category, content, cover } = req.body;

    console.log(req.body)
    const newPost = new Post({
        title: title,
        content: content,
        category: category,
        cover: cover,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
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

