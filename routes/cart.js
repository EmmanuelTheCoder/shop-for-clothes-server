const express = require("express")

const cart = express.Router()

cart.post("/", (req, res) => {
    console.log(req.body);
    res.send("your cart details have been received")
});

module.exports = cart