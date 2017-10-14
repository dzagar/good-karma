var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        bloodDonations: [{type: mongoose.Schema.ObjectId, ref: 'BloodDonations'}]
    }
);

var Users = mongoose.model('user', userSchema);
exports.Model = Users;