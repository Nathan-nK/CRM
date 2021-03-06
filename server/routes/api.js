const express = require('express')
const router = express.Router()
const client = require('../models/clientSchema')

router.get("/clients", function (req, res) {
    client.find({}, function (err, clients) {
        res.send(clients)
    })
})
router.post("/client", function (req, res) {
    const clientData = req.body
    const c1 = new client(clientData)
    c1.save()
    res.end()
})
router.put("/client/:clientid", function (req, res) {
    let id = req.params.clientid
    let update = req.body
    client.findOneAndUpdate({ "_id": id }, update).then(function () {
    })
    res.end()
})
router.delete("/client/:clientID", function (req, res) {
    let id = req.params.clientID
    client.findOneAndDelete({ "_id": id }).then(function () {
    })
    res.end()
})

router.get('/monthlyclients', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 30)
    client.find({
        'firstContact':
        {
            "$gte": dateToCheck,
        }
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/monthlySales', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 30)
    client.find({
        'firstContact':
        {
            "$gte": dateToCheck,
        },
        sold: true
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/HalfYearSales', function (req, res) {
    let dateToCheck = new Date();
    let dateToCheck2 = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 180)
    dateToCheck2.setDate(dateToCheck.getDate() - 365)
    client.find({
        'firstContact':
        {
            "$gte": dateToCheck2,
            "$lte": dateToCheck,
        },
        
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/YearlySales', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 365)
    client.find({
        'firstContact':
        {
            "$lte": dateToCheck,
        },
        sold: true
    }).exec(function (err, clients) {
        res.send(clients)
    })
})


module.exports = router