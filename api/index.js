const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json())
const connectDB = require('./db');
connectDB();

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8080, () => {
    console.log('connected')
})



