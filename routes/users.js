const express = require("express");
const axios = require("axios");
const Model = require("../utils/Model");



const users = express.Router();


users.get("/", async (req, res) =>{

      const collectedDetails = new Model({
        name: 'none',
        username: 'none',
        password: 'none',
        cart: []
      })
      res.send(ip)
      try{
        (async()=>{

          const checkExistence = await Model.findOne({name: ip})
  
          if(!checkExistence){
            
            const newUser = await collectedDetails.save()
            return newUser
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