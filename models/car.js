const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    availability: { type: Boolean, default: true }
});

module.exports = mongoose.model('Car', carSchema);
