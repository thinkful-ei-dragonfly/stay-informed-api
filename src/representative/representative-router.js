
const express = require('express');
const path = require('path');
const RepresentativeService = require('./representative-service');
const ProPublicaService = require('../propublica/propublica-service');
const FinanceService = require('../finances/finances-service');

const representativeRouter = express.Router();
const jsonBodyParser = express.json();

async function getAll(address) {
  let districtObject = await RepresentativeService.getDistrict(address);

  let representatives = await ProPublicaService.getReps(districtObject.state, districtObject.district);

  //creates an array of images maps over them and gets the last name from the full name and sets it as a parameter
  let imgArr = RepresentativeService.imagesMap(districtObject.officialsImages);

  representatives.forEach(rep => {
    //get last nome of the representative from the representatives array
    const lastname = rep.results[0].last_name.toLowerCase();
    //match that last name with the last name on the images array
    const repImage = imgArr.find(img => img.lastname.toLowerCase() === lastname).photoUrl;
    //set the photoUpl on each rep to the photoUrl from the google civic Api
    rep.results[0].photoUrl = repImage;

  });

  async function repsResponse (rep) {
    const results = rep.results[0]
    let cid = results.crp_id
    let contributionTotals = await FinanceService.getContributionTotals(cid);
    let topIndustries = await FinanceService.getTopIndustries(cid);
    let topContributors = await FinanceService.getTopContributors(cid);
    
    return {...results, topContributors, topIndustries, contributionTotals};
  };
    const reps = representatives.map((rep) => {
      return repsResponse(rep);
  });

  return Promise.all(reps).then(repsArray => ({representatives: repsArray, state: districtObject.state,district: districtObject.district,}))
}

representativeRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { address } = req.body;

  getAll(address).then(reps => res.json(reps)).catch(next);

    });
 

module.exports = representativeRouter;

