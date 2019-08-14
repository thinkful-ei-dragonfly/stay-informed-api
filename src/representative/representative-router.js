const express = require('express')
const path = require('path')
const RepresentativeService = require('./representative-service')

const representativeRouter = express.Router()
const jsonBodyParser = express.json()

representativeRouter
  .post('/', jsonBodyParser, (req, res, next) => {
    const { address } = req.body
    // console.log(address);
    let congressionalDistrict = ''
    let stateCode
    let districtCode

    RepresentativeService.getDistrict(
      address
    )
      .then(response => {
        stateCode = response.normalizedInput.state.toLowerCase()

        Object.keys(response.divisions).forEach(item => {
          if (item.includes(`/state:${stateCode}/cd:`)) {
            districtCode = item.split(`/state:${stateCode}/cd:`)[1]
          }
        })
        // Service API call to other APIS
        congressionalDistrict = stateCode.toUpperCase() + districtCode
        console.log(congressionalDistrict);

        // temporarily sending back state and district
        res.send({
          state: stateCode,
          district: districtCode
        })

        // We can perform another RepresentativeService method to request ProPublica/OpenSecrets
        // and pass along the state and/or district code from this previous call

      })
      .catch(next)
  })


module.exports = representativeRouter
