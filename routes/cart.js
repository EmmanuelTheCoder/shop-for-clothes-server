const express = require("express");
const Model = require("../utils/Model")

const cart = express.Router()

cart.post("/", async (req, res) => {

    const confirmVisitorId = await Model.find({visitorId: req.body.visitorId})

    if(confirmVisitorId){
        const updatedCart = await Model.updateOne({$addToSet: {cart: req.body.cart}})
        console.log(updatedCart)

    }else{
        res.send("not found! You don't exist ")
    }

    //console.log(req.body)
    // res.json({response: "your cart details have been received"})

    //const updated = await User.updateOne({username: req.body.username}, {$addToSet: {post: req.body.post}})

});

module.exports = cart