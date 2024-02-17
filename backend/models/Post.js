const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('postModel',PostSchema);