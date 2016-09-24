var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
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
        collection.find().toArray(function(err, item) {
            // Ensure we have found the ticket
            if(err) {
                console.log("There was a problem finding the ticket.");
            } else {
                console.log("Ticket found!");
                res.render('activities', { item: item });
            }
        });
    });
});


module.exports = router;
