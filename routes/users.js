const express = require("express");
const axios = require("axios");
const users = express.Router();




users.get("/", (req, res) =>{

  // async function fetchData(){
  //   setLoadingStatus("loading information...");
   
  // const response = await fetch('https://ipinfo.io/json?token=65792d8fa53479');
  // const data = await response.json();

    
  //   const {city, country, ip, org, loc, region, timezone} = data;

    axios.get('https://ipinfo.io/json?token=65792d8fa53479')
    .then(response => console.log(response))
    .catch(err =>console.log(err));
  
});

module.exports = users;