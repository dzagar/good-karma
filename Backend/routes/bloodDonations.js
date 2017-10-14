var express = require('express');
var router = express.Router();
var BloodDonations = require('../models/bloodDonation');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var bloodDonation = new BloodDonations.Model(request.body.bloodDonation);
        bloodDonation.save(function(error) {
            if (erro ) {
                response.send({error: error});
            }
            else {
                response.json({bloodDonation: bloodDonation});
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