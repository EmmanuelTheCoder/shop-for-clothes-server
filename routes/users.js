const express = require("express");
const axios = require("axios");
const Model = require("../utils/Model");




const users = express.Router();
users.use(express.json());
users.use(express.urlencoded({extended: false}))


users.post("/", async (req, res) =>{


      const collectedDetails = new Model({
        visitorId: req.body.visitorId,
        name: "none",
        email: "none",
        password: "none",
        cart: []
      
      })

      try{
        (async()=>{

          const checkExistence = await Model.findOne({visitorId: req.body.visitorId})
  
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