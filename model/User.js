const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    dob: {
        type: Date,
        default: Date.now(),
    },
    darkMode: {
        type: Boolean,
        default: false,
    },
    Gender: {
        type: String,   
        default: 0,
        enum: [0,1,2,3],  // 0 - Unspecified, 1 - Male, 2 - Female, 3 - Other
    },
    email: {
        type: String,
        required: "Email Is Required",
        unique: "True",
    },
    Fname: {
        type: String,
        required: "First name is required",
    },
    Lname: {
        type: String,
        default: "",
    },
    orderIDs: [Number],
    recent: [Number],
    password: {
        type: String,
        required: true,
    },
    security: [{Question: String, Answer: String}],
    phone: Number,
    addresses: [{Name: String, Addr: String}],
    EU: Boolean,
})

module.exports = mongoose.model('Users', UserSchema);