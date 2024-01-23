
const express = require("express")
const post = require("../controllers/post")
const router = express.Router()

router.get("/", post.getPosts);
router.get("/:id", post.getPost);
router.post("/", post.addPost);
router.delete("/:id", post.deletePost);





module.exports = router