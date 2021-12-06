const express = require('express')
const formdataRoutes = express.Router()
const connection = require ('../dbconnection')

formdataRoutes.get('/', (req,res) => {
    connection.query('SELECT * FROM tipos', (err,result) => {
        if(err) {
            console.log('Deu Erro') 
        }
        else{
            res.json(result)
        }
    })

})

module.exports = formdataRoutes
