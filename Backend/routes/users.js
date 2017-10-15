var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var user = new Users(request.body.user);
        user.save(function(error) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({user: user});
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        Users.find(function(error, users) {
            if (error) {
                response.send(error);
            }
            else {
                response.json({users: users});
            }
        });
    });

router.route('/:user_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        Users.findById(request.params.user_id, function(error, user) {
            if (error) {
                response.send(error);
            } else {
                response.json({user: user});
            }
        });
    })
    
module.exports = router;