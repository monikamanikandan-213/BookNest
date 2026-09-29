const express = require("express");
const Book = require("../models/book");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;