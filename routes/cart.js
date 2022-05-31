const express = require("express")

const cart = express.Router()

cart.post("/", (req, res) => {

     

    console.log(req.body)
    res.send("your cart details have been received")
    // res.json({response: "your cart details have been received"})

    //const updated = await User.updateOne({username: req.body.username}, {$addToSet: {post: req.body.post}})

});

module.exports = cart