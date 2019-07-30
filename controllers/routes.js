var express = require('express');
var router = express.Router();
// var burger = require('../models/burger.js');

router.get('/', function (req, res) {
        res.render('index');
    })

// router.get('/', function (req, res) {
//     burger.all(function(burger_data) {
//         console.log(burger_data);
//         res.render('index');


//     })
// })
module.exports = router;