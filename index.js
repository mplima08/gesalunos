const express = require('express')
const app = express()
const  path = require('path')
app.use(express.static('./public'))

//definir rotas possiveis
app.use('/navbar', require('./routes/navbarRoutes'))
app.use('/formdata', require('./routes/formdataRoutes'))


app.get('/', function(req,res){
   res.sendFile(path.join(__dirname, './public/index.html'))
})


const port=3000
app.listen(port, () => {
   console.log(`Listenning on port ${port}`)
})