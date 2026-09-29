const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    language: String,
    category: String,
    content: String
});

module.exports = mongoose.model("Book", bookSchema);