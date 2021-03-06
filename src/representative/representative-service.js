const fetch = require('node-fetch');
const config = require('../config');

const RepresentativeService = {
  getDistrict(address) {
    let congressionalDistrict = '';
    let stateCode;
    let districtCode;
    let districtObj;

    return fetch(
      `${config.CIVIC_API_URL}?key=${config.CIVIC_API_KEY}&address=${address}`
    )
      .then(res => {
        return res.json();
      })
      .then(response => {
        if(response.normalizedInput) {
          stateCode = response.normalizedInput.state.toLowerCase();

          Object.keys(response.divisions).forEach(item => {
            if (item.includes(`/state:${stateCode}/cd:`)) {
              districtCode = item.split(`/state:${stateCode}/cd:`)[1];
            }
          });
  
          districtObj = {
            state: stateCode,
            district: districtCode,
          };
        }
        return districtObj;
      });
  },

  imagesMap(images){
    let imgArr = images.map(img => {
      const nameArr = img.name.split(' ');
      const lastname = nameArr[nameArr.length-1];
      return {lastname, photoUrl: img.photoUrl};
    });
    return imgArr;
  }
};

module.exports = RepresentativeService;
