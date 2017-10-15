var mongoose = require('mongoose');
var volunteeringSchema = mongoose.Schema(
    {
        date: String,
        location: String,
        duration: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }
);

module.exports = mongoose.model('volunteering', volunteeringSchema);