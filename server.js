const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

require('./routes/user')(app)

const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log('Server udah running sekarang')
})
