const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    category: {
        type: String,
        enum: ['comedy', 'horror', 'thriller', 'action']
    },
    year: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema)