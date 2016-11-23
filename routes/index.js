var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('pokedex');
    collection.find({}, {}, function(e, docs) {
        res.render('index', {
            "pokedex" : docs
        });
    });
});

/* GET UserList page */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET pokedex page */
router.get('/pokedex', function(req, res) {
    var db = req.db;
    var collection = db.get('pokedex');
    collection.find({}, {}, function(e, docs) {
        res.render('pokedex', {
            "pokedex" : docs
        });
    });
});

/* GET moves page */
router.get('/moves', function(req, res) {
    var db = req.db;
    var collection = db.get('moves');
    collection.find({}, {}, function(e, docs) {
        res.render('moves', {
            "move" : docs
        });
    });
});

/* GET editbox page */
router.get('/editbox', function(req, res) {
    var db = req.db;
    var pokedex = null;
    var natures = null;

    db.get('pokedex').find({}, {}, function(e, docs) {
        pokedex = docs;
        render();
    });

    db.get('natures').find({}, {}, function(e, docs) {
        natures = docs;
        render();
    });

    function render() {
        if (pokedex != null && natures != null) {
            res.render('editbox', {
                "pokedex" : pokedex,
                "natures" : natures
            });
        }
    }
});

function sayHello() {
    console.log("Hello");
}

router.post('/choose_pokemon_type', function(req, res) {
    console.log("choosing pokemon type");
});

/* GET boxes page */
router.get('/boxes', function(req, res) {
    res.render('boxes', { title: 'Boxes'});
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;
