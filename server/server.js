const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bookroutes = require("./routes/bookroutes");
const summaryroute = require("./routes/summaryroute");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.use("/api/books", bookroutes);
app.use("/api/summary", summaryroute);

app.get("/", (req, res) => {
    res.send("BookNest Backend is Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});