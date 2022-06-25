const express = require("express");
const Model = require("../utils/Model");
const {detailProduct, storeProducts} = require("../utils/data")

const cart = express.Router()

cart.post("/", async (req, res) => {

    const confirmVisitorId = await Model.find({visitorId: req.body.visitorId})

    if(confirmVisitorId){
        await Model.updateOne({$addToSet: {cart: req.body.cart}})
        
        const collectCart = await Model.findOne({cart})
        res.send(collectCart.cart)

    }else{
        res.send("not found! You don't exist ")
    }

    //console.log(req.body)
    // res.json({response: "your cart details have been received"})

    //const updated = await User.updateOne({username: req.body.username}, {$addToSet: {post: req.body.post}})

});

cart.post("/findcart", async (req, res) =>{
    const confirmVisitorId = await Model.find({visitorId: req.body.visitorId})

    if(confirmVisitorId){
        const collectCart = await Model.findOne({})
        res.json({detailProduct: detailProduct, storeProducts: storeProducts, collectCart: collectCart.cart})
    }else{

    }
});

module.exports = cart