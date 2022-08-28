const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
});

module.exports = mongoose.model('Contact', ContactSchema);