var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var Volunteering = require('../models/volunteering');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var volunteering = new Volunteering(request.body.volunteering);
        Users.findById(volunteering.user, function(error, user){
            if (error){
                response.send(error);
            } else {
                user.volunteering.push(volunteering._id);

                volunteering.save(function(error) {
                    if (error){
                        response.send(error);
                    } else {
                        user.save(function(error) {
                            if (error) {
                                response.send(error);
                            } else {
                                response.json({volunteering : volunteering});
                            }
                        });
                    }
                });
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        Volunteering.Model.find(function(error, volunteering) {
            if (error) {
                response.send(error);
            }
            else {
                response.json({volunteering: volunteering});
            }
        });
    });
    
router.route('/:volunteering_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        Volunteering.findById(request.params.volunteering_id, function(error, volunteering) {
            if (error) {
                response.send(error);
            } else {
                response.json({volunteering: volunteering});
            }
        });
    })

module.exports = router;