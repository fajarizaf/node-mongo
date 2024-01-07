const USERS = require("../controllers/user")

const user = app => {

    app.get('/db/connection' , async (req,res) => {

        try {

            var create = await USERS.createCollection()

            res.send({status: 'error', response: "connect database", message: create})

        } catch (error) {
            res.send({status: 'error', response: error})
        }

    })


    app.get('/user' , async (req,res) => {

        res.send({status: 'failed', response: "sudah bisa tampil"})

    })
    
}

module.exports = user