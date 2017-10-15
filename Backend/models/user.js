var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        bloodDonations: [{type: mongoose.Schema.ObjectId, ref: 'BloodDonations'}],
        cashDonations: [{type: mongoose.Schema.ObjectId, ref: 'CashDonations'}],
        volunteering: [{type: mongoose.Schema.ObjectId, ref: 'Volunteering'}],
    }
);

var Users = mongoose.model('user', userSchema);
module.exports = Users;