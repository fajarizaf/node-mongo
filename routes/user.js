
const User = require("../models/user")

const user = app => {

    app.get('/user/add' , async (req,res) => {

        //create user profile
        const user_profile = new User({
            user_profile_id : 1,
            first_name : 'Fajar',
            last_name : 'Riza Fauzi',
            address : 'Jl Asem Baris',
            city : 'Jakarta',
            province : 'DKI Jakarta',
            country : 'Indonesia',
            postal_code : 1745,
            photo : "req.jpg",
            created_by: 1,
            modified_by: 1,
        });

        user_profile.save()

        res.send({status: 'failed', response: "sudah bisa tampil"})

    })
    
}

module.exports = user