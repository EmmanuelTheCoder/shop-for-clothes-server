const express = require("express");
const {storeProducts, detailProduct} = require("../utils/data")

const items = express.Router()

items.get("/", (req, res) =>{

    res.json({storeProducts: storeProducts, detailProduct: detailProduct})
})

module.exports = items;