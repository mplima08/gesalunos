const express = require('express')
const inserirutilizadorRoute = express.Router()
const connection = require ('../dbconnection')

inserirutilizadorRoute.post('/', (req,res) => {
    connection.query(
        'INSERT INTO utilizadores (nomeutilizador, moradarua, moradanumero, datanascimento, telemovel, email, idtipo) VALUES (?,?,?,?,?,?,?)'
        [req.body.nomeutilizador, req.body.moradarua, req.body.moradanumero, req.body.daranascimento, req.body.telemovel, req.body.emaail, req.body.idtipo] ,
        
        (err,result) => {
            if(err) {
                console.log('Deu Erro') 
            }
            else{
            console.log(result)
            res.json({text: 'Utilizador adicionado com sucesso'})
        
            }
    console.log(req.body.texto)
    console.log(req.body.data)
    res.json({response:ok})
    }) 
})


module.exports = inserirutilizadorRoute
