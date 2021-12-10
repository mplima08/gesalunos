const express = require('express')
const app = express()
const  path = require('path')

//Define caminho para a pasta publica do projeto
app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: false}))

//definir rotas possiveis
app.use('/navbar', require('./routes/navbarRoutes'))
app.use('/formdata', require('./routes/formdataRoutes'))
app.use('/utilizador', require('./routes/inserirutilizadorRoute'))


app.get('/', function(req,res){
   res.sendFile(path.join(__dirname, './public/index.html'))
})


const port=3000
app.listen(port, () => {
   console.log(`Listenning on port ${port}`)
})