var mongoose = require('mongoose');
var cashDonationSchema = mongoose.Schema(
    {
        date: String,
        location: String,
        amount: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }
);

module.exports = mongoose.model('cashDonation', cashDonationSchema);