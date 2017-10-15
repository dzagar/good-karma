var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var CashDonations = require('../models/cashDonation');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function(request, response) {
        var cashDonation = new CashDonations(request.body.cashDonation);
        Users.findById(cashDonation.user, function(error, user){
            if (error){
                response.send(error);
            } else {
                user.cashDonations.push(cashDonation._id);

                cashDonation.save(function(error) {
                    if (error){
                        response.send(error);
                    } else {
                        user.save(function(error) {
                            if (error) {
                                response.send(error);
                            } else {
                                response.json({cashDonation : cashDonation});
                            }
                        });
                    }
                });
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        CashDonations.Model.find(function(error, cashDonations) {
            if (error) {
                response.send(error);
            }
            else {
                response.json({cashDonations: cashDonations});
            }
        });
    });

module.exports = router;