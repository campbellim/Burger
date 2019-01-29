var express = require('express');
//attempting to find answers was suggested to use router instead of normal way.. 
//not sure why but it clearly didnt solve problem.
var router = express.Router();
var queries = require('../models/burger.js');

router.get('/', function (req, res) {
    queries.show(function(data){
        var data1 = {
            burgerData: data
        }
        res.render('index', data1);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    queries.eat(req.params.id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;