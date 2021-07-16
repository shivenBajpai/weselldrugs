const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productID : {
        type: Number,
        required: true,
    },
    offer: {
        type: {type: Number, enum: [0,1,2]},
        reducedPrice: Number,
        reductionPercent: Number,
        customText: String,
        customColor: String,
    },
    quantity: Number,
    stops: {
        type: Map,
        of: String,
    },
    address: String,
    date: Date,
})

module.exports - mongoose.model('Orders', OrderSchema)