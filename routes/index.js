var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('pokedex');
    collection.find({}, {}, function(e, docs) {
        res.render('landing', {
            "pokedex" : docs
        });
    });
});

/* function to get list of (edited) pokemon in specified box */
router.post('/getbox', function(req, res) {
    // get the slots in the box number inside savefiles
    // ex. if in box two. get pokemon at 31 to 60.
    // return here
    var db = req.db;
    var data = req.body; // data.email data.box
    console.log("boxnum: " + data.box);
    var slots = (data.box * 30); // this is how many slots to skip
    console.log("slots: " + slots);
    var start = slots - 30;
    console.log("start: " + start);
    var savefiles = db.get('savefiles');
    savefiles.find({'email':data.email}, function(e, docs) {
        if (e) return;
        if (docs.length == 0) {
            // should not happen exit with error
            return;
            res.end("404");
        } else {
            var pokemon = new Array(0);
            for (var i = start; i < slots; i++) {
                //console.log(docs[0].box[i]);
                pokemon.push(docs[0].box[i]);
            }
            res.send(pokemon);
        }
    });
});

router.get('/edit', function(req, res, next) {
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

/* function to test server client connection */
router.get('/getbulbasaur', function(req, res) {
    var db = req.db;
    var pokedex = db.get('pokedex');
    pokedex.find({"Ndex" : "#001"}, {}, function(e, docs) {
        if (e) return;
        res.send(JSON.stringify(docs));
    });
    //res.send("indexjs saying hello");
});

/* function to save edited slot */
router.post('/saveslot', function(req, res) {
    var db = req.db;
    var savefiles = db.get('savefiles');
    var body = req.body;
    res.send(body);
    /*
    savefiles.find({}, {}, function(e, docs) { // TODO find the user's savefile then update pokemon based on slot number
        if (e) return;

    });*/
});

/* function to save edited trainer */
router.post('/savetrainer', function(req, res) {
    var db = req.db;
    var data = req.body;
    
    res.send(data);
});

/* function to load current slot */
router.post('/getpokemonatslot', function(req, res) {

});

/* fnction to load trainer info */
router.post('/gettrainer', function(req, res) {

});

/* function to create default savefile */
router.post('/startcustom', function(req, res) {
    var db = req.db;
    var data = req.body;
    var savefiles = db.get('savefiles');
    savefiles.find({'email':data.email}, function(e, docs) {
        if (e) return;
        console.log("number of records: " + docs.length);
        if (docs.length == 0) {
            // if no docs exists, then create new entry
            var str = data.email + " does not have savefile, proceeding to create new";
            res.send(str);
        } else {
            // else, ask user if they want to continue or start new
            var str = data.email + " has a savefile, would you like to continue or start new?";
            res.send(str);
        }
    });
});

router.post('/createdefaultsavefile', function(req, res) {
    var db = req.db;
    var data = req.body;
    var savefiles = db.get('savefiles')
    savefiles.find({'email':data.email}, function(e, docs) {
        if (e) return;
        console.log("number of records: " + docs.length);
        if (docs.length == 0) {
            // if no docs exists, then create new entry
            var str = data.email + " does not have savefile, proceeding to create new";
            // creating new savefile
            var pokedex = db.get('pokedex');
            pokedex.find({}, {}, function(e, docs) {
                if (e) return;
                savefiles.insert({'email':data.email, 'box':docs}, function(e, docs) {
                    if (e) {
                        console.log("error inserting to db");
                        return;
                    }
                    console.log("successfully inserted to db");
                })
            });
        } else {
            // else, ask user if they want to continue or start new
            var str = data.email + " has a savefile, would you like to continue or start new?";
            res.send(str);
        }
    });
});

/* function used to update db */
/* DELETE THIS BEFORE PRODUCTION */
router.get('/getfile', function(req, res) {
    var fs = require('fs');
     //TODO keep changing file to keep readings
    /*fs.readFile('.txt', function(e, data) {
        if (e) {
            console.log(e);
        }
        var str = new String(data);
        var res = str.split("\n");

        var db = req.db;
        var abilities = db.get('');
        for (var i = 0; i < res.length; i++) {
            abilities.insert({"_id":i+1, "name": res[i]}, function(e, result) {
                if (e) {
                    console.log(e);
                }
            });
        }

        //res.send(data);
    }); */
    res.send("done");
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
    res.send("pokedex saying hello");
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
router.get('/editbox/:key?', function(req, res) {
    var key = req.params.key;
    var db = req.db;
    var pokedex = null;
    var natures = null;
    var moves = null;
    var abilities = null;

    db.get('pokedex').find({}, {}, function(e, docs) {
        pokedex = docs;
        render();
    });

    db.get('natures').find({}, {}, function(e, docs) {
        natures = docs;
        render();
    });

    db.get('moves').find({}, {}, function(e, docs) {
        moves = docs;
        render();
    });

    db.get('abilities').find({}, {}, function(e, docs) {
        abilities = docs;
        render();
    });

    function render() {
        if (pokedex != null && natures != null && moves != null && abilities !=null) {
            res.render('editbox', {
                "pokedex" : pokedex,
                "natures" : natures,
                "moves" : moves,
                "abilities" : abilities,
                // need to pass the page number to editbox
            });
        }
    }
});

function sayHelloIndex() {
    console.log("Hello");
}

router.post('/choose_pokemon_species', function(req, res) {
    var db = req.db;
    var data = req.body;
    var pokedex = db.get('pokedex');
    pokedex.find({'Ndex': "#001"}, {}, function(e, docs) {
        if (err) return;
        res.send(docs);
    });
});

/* GET boxes page */
router.get('/boxes', function(req, res) {
    res.render('boxes', { title: 'Boxes'});
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* GET a single pokemon from pokedex */
router.get('/getpokemon', function(req, res) {
    var db = req.db;
    var data = req.body;
    var pokedex = db.get('pokedex');
    pokedex.find({'index': data._id}, {}, function(e, docs) { // the _id should match the species' national dex id
        if (err) {
            res.send("error retrieving data");
        } else {
            res.send(docs); // need to check the format of docs to see if it returns a single pokedex object
        }
    });
});

function sayHelloIn() {
    console.log("sayHello")
}

/* POST function that says hello */
router.get('/sayhello', function(req, res) {
    console.log("hello");
});


/* POST to add a single trainer to savefile */
/*
router.post('/savetrainer', function(req, res) {
    var db = req.db;
    var data = req.body;
    var collection = db.get('savefiles');
    collection.insert({
        'name' : data.name, // trainer name
        'tid' : data.tid, // trainer id
        'sid' : data.sid, // secret id
        'start' : data.start, // this should be the start date
    }, function(err, doc) {
        if (err) {
            res.send("error adding trainer to db");
        } else {
            res.send("successfully added trainer to savefiles");
        }
    });
}); */

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
