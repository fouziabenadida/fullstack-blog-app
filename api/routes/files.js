
const express = require("express")
const multer = require('multer')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const path = appDir + "/uploads/"
        cb(null, path);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage });

const router = express.Router()

router.post('/upload', upload.single('file'), function (req, res) {
    const path = appDir + "/uploads/" + req.file.filename;
    res.json(path)
})

module.exports = router