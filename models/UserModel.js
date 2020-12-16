const { Schema, model } = require('mongoose')

var UserSchema = Schema({
    fullname: {
        type: "String",
        required: true
    },
    username: {
        type: "String",
        required: true,
        unique: true,
        min: 6
    },
    email: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    phone: "String",
    dob: "Date"
})

module.exports = model("User", UserSchema)