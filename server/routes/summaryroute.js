const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({
            message: "Book content is required"
        });
    }

    const sentences = content
        .split(".")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0);

    const summary = sentences.slice(0, 2).join(". ") + ".";

    res.json({
        summary: summary
    });
});

module.exports = router;