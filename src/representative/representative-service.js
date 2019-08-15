const fetch = require('node-fetch');
const config = require('../config');

const RepresentativeService = {
  getDistrict(address) {
    let congressionalDistrict = '';
    let stateCode;
    let districtCode;

    return fetch(
      `${config.CIVIC_API_URL}?key=${config.CIVIC_API_KEY}&address=${address}`
    )
      .then(res => {
        return res.json();
      })
      .then(response => {
        stateCode = response.normalizedInput.state.toLowerCase();

        let officialsImages = response.officials.map(official => {
          return {
            name: official.name,
            photoUrl: official.photoUrl
          };
        });

        Object.keys(response.divisions).forEach(item => {
          if (item.includes(`/state:${stateCode}/cd:`)) {
            districtCode = item.split(`/state:${stateCode}/cd:`)[1];
          }
        });

        let districtObj = {
          state: stateCode,
          district: districtCode,
          officialsImages
        };

        return districtObj;
      });
  }
};

module.exports = RepresentativeService;
