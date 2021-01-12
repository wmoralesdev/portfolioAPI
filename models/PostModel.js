const { Schema, model } = require('mongoose')

var PostSchema = Schema({
    text: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    author_id: {
        required: true,
        type: String
    }
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

module.exports = model("Post", PostSchema)