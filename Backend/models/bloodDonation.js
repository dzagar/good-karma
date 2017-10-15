var mongoose = require('mongoose');
var bloodDonationSchema = mongoose.Schema(
    {
        date: String,
        location: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }
);

module.exports = mongoose.model('bloodDonation', bloodDonationSchema);