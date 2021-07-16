const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "defaultimagehref",
    },
    price: {
        type: Number,
        required: "price is required",
    },
    offer: {
        type: {type: Number, enum: [0,1,2]},
        reducedPrice: Number,
        reductionPercent: Number,
        customText: String,
        customColor: String,
    },
    name: {
        type: String,
        required: "Name is required",
    },
    description: String,
    info: {
        type: Map,
        of: String,
    },
})

module.exports - mongoose.model('Products', ProductSchema)