const express = require('express');
const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../client/public/upload");
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     }
// })

// const upload = multer({ storage });

const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./db');
connectDB();



// app.post("/api/upload", upload.single("file"), function (req, res) {
//     const file = req.file;
//     res.status(200).json(file.filename);
//     // const file = req.file          
//     // console.log(req);
//     // res.json(__dirname + '/uploads/' + file.filename)
// });
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const filesRoute = require('./routes/files');

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/files", filesRoute);

app.listen(8080, () => {
    console.log('connected')
})



