require('dotenv').config();
const express = require('express');
const propubRouter = express.Router();
const fetch = require('node-fetch');
fetch.Promise = global.Promise;

let state = 'CA'
let districtCode = '01'

// create URLs GET endpoint from env
const senateURL = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
const houseDistURL = `https://api.propublica.org/congress/v1/members/house/${state}/${districtCode}/current.json`;

const propubAPI = process.env.PROPUBLICA_KEY;
console.log(propubAPI)

// local server => fetch from API with options, add to DATASTREAM
propubRouter.get('/api/district/', (req, res) => {
  const reqOptions = {
    method: 'GET',
    headers: {
      "x-api-key": "JI1WbwsALu2f4m7sFqxYzl8JOddwOvG14MwWSa7P"
    }
  }; 
  let dataStream = {};
  fetch(senateURL, reqOptions)
    .then(res => res.json())
    .then(senateRes => {
      dataStream = { senateRes }
      fetch(houseDistURL, reqOptions)
        .then(houseRes => houseRes.json())
        .then(houseRes => {
          dataStream = { ...dataStream, ...houseRes };
          res.json(dataStream)
        })
        .catch(senateError => console.log('Error from senate request', senateError));
    })
    .catch(houseError => console.log('Error in house request', houseError));
   })

module.exports = propubRouter;
