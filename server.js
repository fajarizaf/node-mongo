const express = require('express')
const mongoose = require("mongoose");
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

require('./routes/user')(app)

//db connection
mongoose
    .connect('mongodb://127.0.0.1:27017/identity')
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log('Server udah running sekarang')
})
