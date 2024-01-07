
const database = require('../config/dbconnection')

const databases = database.db

exports.createCollection = () => new Promise((resolve, reject) => {

    databases.collection('documents').insertOne(
        {
            nama: 'fajar',
            email: 'fajarizaf@gmail.com'
        }
    );

    resolve({status:'success'})

})


