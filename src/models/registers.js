//this folder is to define schema

const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const travelersSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    gender : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    }
})

// now we need to create collections
const Register = new mongoose.model("Register",travelersSchema);

module.exports = Register;