const express = require("express");
const axios = require("axios");
const Model = require("../utils/Model");

const users = express.Router();


users.get("/", async (req, res) =>{

    //https://ipinfo.io/json?token=65792d8fa53479

    axios.get('https://ipinfo.io/json?token=65792d8fa53479')
    .then(response => {
      
      const {ip} = response.data;

      const collectedDetails = new Model({
        name: ip,
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
    
    })
    .catch(err =>console.log(err));
  
});

module.exports = users;