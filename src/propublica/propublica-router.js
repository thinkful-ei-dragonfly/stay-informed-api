require('dotenv').config();
const express = require('express');
const propubRouter = express.Router();
const fetch = require('node-fetch');
fetch.Promise = global.Promise;

let state = 'CA';
let districtCode = '03';

// create URLs GET endpoint from env
const senateURL = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
const houseDistURL = `https://api.propublica.org/congress/v1/members/house/${state}/${districtCode}/current.json`;

// local server => fetch from API with options, add to DATASTREAM
propubRouter.get('/api/officials/', (req, res) => {
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

      const senator_uri = senateRes.results[0].api_uri;
      const senator2_uri = senateRes.results[1].api_uri;
      fetch(senator_uri, reqOptions)
        .then(memRes => memRes.json())
        .then(memRes => {
          dataStream = { ...dataStream, ...memRes };

          fetch(senator2_uri, reqOptions)
            .then(memResTwo => memResTwo.json())
            .then(memResTwo => {
              dataStream = { ...dataStream, ...memResTwo };
            });

          res.json(dataStream);
        })

        .catch(senateError =>
          console.log('Error from senate request', senateError)
        );
    })
    .catch(houseError => console.log('Error in house request', houseError));
});
module.exports = propubRouter;
