var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var BloodDonations = require('../models/bloodDonation');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var bloodDonation = new BloodDonations(request.body.bloodDonation);
        Users.findById(bloodDonation.user, function(error, user){
            if (error){
                response.send(error);
            } else {
                user.bloodDonations.push(bloodDonation._id);

                bloodDonation.save(function(error) {
                    if (error){
                        response.send(error);
                    } else {
                        user.save(function(error) {
                            if (error) {
                                response.send(error);
                            } else {
                                response.json({bloodDonation : bloodDonation});
                            }
                        });
                    }
                });
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        BloodDonations.Model.find(function(error, bloodDonations) {
            if (error) {
                response.send(error);
            }
            else {
                response.json({bloodDonations: bloodDonations});
            }
        });
    });

module.exports = router;