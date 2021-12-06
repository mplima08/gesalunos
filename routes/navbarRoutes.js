const { Router } = require('express')
const express = require ('express')
const path = require ('path')
const navbarRoutes = express.Router()

navbarRoutes.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/navbar.html'))
})



module.exports = navbarRoutes