require('dotenv').config();
const express = require('express');
const propubRouter = express.Router();
const fetch = require('node-fetch');
//fetch.Promise = global.Promise;


const ProPublicaService = {
  getReps(state, districtCode) {

// create URLs GET endpoint from env
const senateURL = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
const houseDistURL = `https://api.propublica.org/congress/v1/members/house/${state}/${districtCode}/current.json`;

// local server => fetch from API with options, add to DATASTREAM
  const reqOptions = {
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.PROPUBLICA_API_KEY}`
    }
  };

  let dataStream = {};
  fetch(senateURL, reqOptions)
    .then(res => res.json())
    .then(senateRes => {
      dataStream = { senateRes };
      const urls = [senateRes.results[0].api_uri, senateRes.results[1].api_uri];
      fetch(houseDistURL, reqOptions)
        .then(res => res.json())
        .then(houseRes => {
          dataStream = { ...dataStream, houseRes };
          urls.push(houseRes.results[0].api_uri);
        })
        .then(() => {
          Promise.all(
            urls.map(url => fetch(url, reqOptions).then(res => res.json()))
          ).then(memberDetails => {
            console.log(dataStream);
            // res.json(memberDetails);
            return memberDetails;
          });
        });
    });
  }
}


module.exports = ProPublicaService;