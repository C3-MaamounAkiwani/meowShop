const mongoose = require('mongoose');

const purchaseModel = new mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    country: { type: String, required: true },
});

module.exports = mongoose.model("Purchase", purchaseModel);