var mongoose = require('mongoose');
var bloodDonationSchema = mongoose.Schema(
    {
        date: String,
        location: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }
);

var BloodDonations = mongoose.model('bloodDonation', bloodDonationSchema);
exports.Model = BloodDonations;