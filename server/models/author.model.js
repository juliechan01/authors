const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Every author has a name!"
        ] 
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);