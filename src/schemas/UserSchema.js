const { User } = require("discord.js")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    reportID:{

        type: mongoose.SchemaTypes.String,
        required: true
        
    },
    caseReason: {

        type: mongoose.SchemaTypes.String,
        required: true

    },
    author: {

        type: mongoose.SchemaTypes.String,
        required: true

    },
    reportedUser: mongoose.SchemaTypes.String,
    

}) 

module.exports = mongoose.model("Reports", UserSchema)