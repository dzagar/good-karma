var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var NewsFeed = require('../models/newsFeed');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var NewsFeed = new NewsFeed(request.body.newsFeed);
        Users.findById(newsFeed.user, function(error, user){
            if (error){
                response.send(error);
            } else {
                user.newsFeed.push(newsFeed._id);

                newsFeed.save(function(error) {
                    if (error){
                        response.send(error);
                    } else {
                        user.save(function(error) {
                            if (error) {
                                response.send(error);
                            } else {
                                response.json({newsFeed : newsFeed});
                            }
                        });
                    }
                });
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        NewsFeed.Model.find(function(error, newsFeed) {
            if (error) {
                response.send(error);
            }
            else {
                response.json({newsFeed: newsFeed});
            }
        });
    });

router.route('/:bloodDonation_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        NewsFeed.findById(request.params.newsFeed_id, function(error, newsFeed) {
            if (error) {
                response.send(error);
            } else {
                response.json({newsFeed: newsFeed});
            }
        });
    })
module.exports = router;