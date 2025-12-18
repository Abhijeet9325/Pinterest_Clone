const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postText: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    image: String,
    password: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    likes: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Post", postSchema);