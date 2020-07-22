var express = require("express");
var path = require("path");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
    db.Burger.findAll({})
    .then(function(dbBurger){
        var hbsObject = {
            burgers: dbBurger
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.get("/api/burgers", function(req, res){
    db.Burger.findAll({})
            .then(function (dbBurger) {
                res.json(dbBurger);
            });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger
        })
            .then(function (dbBurger) {
                res.json(dbBurger);
            });
});

router.put("/api/burgers", function(req, res){
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

module.exports = router;