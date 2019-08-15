const fetch = require("node-fetch");
const config = require('../config')

const RepresentativeService = {
  getDistrict(address) {
    return fetch(`${config.CIVIC_API_URL}?key=${config.CIVIC_API_KEY}&address=${address}`)
      .then(res => {
        return res.json()
      })
  }
}

module.exports = RepresentativeService
