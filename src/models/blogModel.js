const mongoose = require('mongoose');

const schema = new mongoose.Schema

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },

    tag: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    
    PublishedAt: {
        type: Date,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
} , {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;