const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    contactname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;