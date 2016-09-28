var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var item1 = [{
    "_id": {
        "$oid": "57e6694508942c196c4bf6bd"
    },
    "nume": "Nicio activitate azi :(",
    "start": "",
    "end": "",
    "nr": "",
    "ziua": "",
    "info": ""
}];
var item2 = [{
    "_id": {
        "$oid": "57e6694508942c196c4bf6bd"
    },
    "nume": "Nicio activitate azi :(",
    "start": "",
    "end": "",
    "nr": "",
    "ziua": "",
    "info": ""
}];
var item3 = [{
    "_id": {
        "$oid": "57e6694508942c196c4bf6bd"
    },
    "nume": "Nicio activitate azi :(",
    "start": "",
    "end": "",
    "nr": "",
    "ziua": "",
    "info": ""
}];
var item4 = [{
    "_id": {
        "$oid": "57e6694508942c196c4bf6bd"
    },
    "nume": "Nicio activitate azi :(",
    "start": "",
    "end": "",
    "nr": "",
    "ziua": "",
    "info": ""
}];
var item5 = [{
    "_id": {
        "$oid": "57e6694508942c196c4bf6bd"
    },
    "nume": "Nicio activitate azi :(",
    "start": "",
    "end": "",
    "nr": "",
    "ziua": "",
    "info": ""
}];
/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect("mongodb://a:a@ds035036.mlab.com:35036/scoala", function(err, db) {
        // Ensure we have connected
        if(err) {
            console.log("Cannot connect to database");
        } else {
            console.log("Connected to database");
        }
        // Create a collection to query
        var collection = db.collection('activities');
        collection.find({ziua: "0"}).toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err || !item.length) {
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                item1 = item;
            }
        });
        collection.find({ziua: "1"}).toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err || !item.length ) {
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                item2 = item;
            }
        });
        collection.find({ziua: "2"}).toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err || !item.length) {
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                item3 = item;
            }
        });
        collection.find({ziua: "3"}).toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err || !item.length) {
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                item4 = item;
            }
        });
        collection.find({ziua: "4"}).toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err || !item.length){
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                item5 = item;
            }
        });
        res.render('activities', { item1: item1 , item2:item2 , item3:item3 , item4:item4 , item5:item5 });
    });
});


module.exports = router;
