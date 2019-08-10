const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./routes/api')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const client = require("./models/clientSchema")

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', api)

port = 3030
mongoose.connect('mongodb://localhost/Clients', { useNewUrlParser: true }).then(() => {
    app.listen(port, () => console.log(`Running Server On Port ${port}`))
})