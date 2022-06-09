const express = require("express");
const axios = require("axios");
const Model = require("../utils/Model");

const users = express.Router();

users.post("/", async (req, res) =>{


      console.log("visitorId",  req.body);

      const collectedDetails = new Model({
        name: 'none',
        username: 'none',
        password: 'none',
        visitorId: req.body,
        cart: []
      })

      try{
        (async()=>{

          const checkExistence = await Model.findOne({visitorId: Number(req.body)})
  
          if(!checkExistence){
            
            const newUser = await collectedDetails.save()
            res.send(newUser)
          }
          
        })()
      }
      catch(err){
        res.status(500).send(err);
      }
    

  
});

users.get("/id", (req, res) => {
  
    
  
});

module.exports = users;