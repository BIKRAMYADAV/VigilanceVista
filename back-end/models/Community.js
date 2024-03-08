const mongoose = require('mongoose')

const CommunitySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("CommunityModel", CommunitySchema )