var mongoose = require('mongoose');
var newsFeedSchema = mongoose.Schema(
    {
        date: String,
        location: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }
);

module.exports = mongoose.model('newsFeed', newsFeedSchema);