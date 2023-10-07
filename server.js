const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const bodyParser = require('body-parser')

const routes = require('./routes')
const database = require('./db')


app.use(bodyParser.urlencoded({extended:true}))

app.use(routes)


app.listen(3001,()=>{
    console.log("Servidor rodando...")
})

database.sync()

