const express = require('express')
const app = express()
const  path = require('path')
const connection = require('./dbconnection.js')
app.use(express.static('./public'))



app.get('/navbar', (req,res) => {
   res.sendFile(path.join(__dirname, './public/navbar.html'))
})

app.get('/', function(req,res){
   res.sendFile(path.join(__dirname, '/public.index.html'))
})

const port=3000
app.listen(port, () => {
   console.log(`Listenning on port ${port}`)
})