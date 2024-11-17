const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    
    id: {
        type: String,
        required:true,
    },
});

const postModel = mongoose.model("student ", postSchema);

module.exports = postModel;