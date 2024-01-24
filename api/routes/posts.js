
const express = require("express")
const post = require("../controllers/post")
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' });
const router = express.Router()

router.get("/", post.getPosts);
router.get("/:id", post.getPost);
router.post("/", uploadMiddleware.single('file'), post.addPost);
router.delete("/:id", post.deletePost);
router.put('/:id', post.updatePost)





module.exports = router