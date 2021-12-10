const express = require('express')
const inserirutilizadorRoutes = express.Router()
const connection = require ('../dbconnection')

inserirutilizadorRoutes.post('/', (req,res) => {
/*    connection.query('SELECT * FROM tipos', (err,result) => {
        if(err) {
            console.log('Deu Erro') 
        }
        else{
            res.json(result)
        }
    })*/
    console.log(req.body.texto)
    console.log(req.body.data)
    res.json({response:ok})
}) 



module.exports = inserirutilizadorRoutes
