const express = require("express");

const Model = require("./Model");

const removeAll = express.Router()

removeAll.get("/", async (req, res) =>{

    const checkRemoved = await Model.deleteMany({});

    res.send(checkRemoved)
})

module.exports = removeAll