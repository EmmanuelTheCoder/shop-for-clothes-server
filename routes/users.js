const express = require("express");
const axios = require("axios");
const Model = require("../utils/Model");


const users = express.Router();




users.get("/", async (req, res) =>{

    // axios.get('https://ipinfo.io/json?token=65792d8fa53479')
    // .then(response => {

    //   const {ip} = response;
    //   console.log(response);

      const collectedDetails = new Model({
        name: "Emmanuel",
        email: "none",
        password: "none"
      })

      try{
        (async()=>{

          const checkExistence = await Model.findOne({name: "Emmanuel"})
  
          if(!checkExistence){
            
            const newUser = await collectedDetails.save()
            return res.status(200).json({message: "successs", details: newUser});
          }
          return res.json({response: "invalid", reason: "user already exists"})
        })()
      }
      catch(err){
        res.status(500).send(err);
      }
    
    //})
    //.catch(err =>console.log(err));
  
});

module.exports = users;