const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    rollNo : {
        type : Number,
        required : true,
        unique : true
    },
    english : {
        type : Number,
        required : true,
        default : 0
    },
    maths : {
        type : Number,
        required : true,
        default : 0
    },
    physics : {
        type : Number,
        required : true,
        default : 0
    },
    chemistry : {
        type : Number,
        required : true,
        default : 0
    },
    hindi : {
        type : Number,
        required : true,
        default : 0
    },
    ped : {
        type : Number,
        required : true,
        default : 0
    },
})

module.exports = mongoose.model("user", userSchema)