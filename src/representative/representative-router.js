
const express = require('express');
const path = require('path');
const RepresentativeService = require('./representative-service');
const ProPublicaService = require('../propublica/propublica-service');
const FinanceService = require('../finances/finances-service');

const representativeRouter = express.Router();
const jsonBodyParser = express.json();

async function getAll(address) {

  let districtObject = await RepresentativeService.getDistrict(address);

  if(!districtObject || !districtObject.state || !districtObject.district) { 
    const st = districtObject.state.toLowerCase();
    if(!st || !['ak', 'de', 'mt','nd','sd','vt','wy'].includes(st)){
    throw new Error("We couldn't find your district");
    } else{
      districtObject.district = 1;
    }
    
  }

  let representatives = await ProPublicaService.getReps(districtObject.state, districtObject.district);

  async function repsResponse (rep) {
    const results = rep.results[0]
    const photoUrl = `https://theunitedstates.io/images/congress/450x550/${results.member_id}.jpg`
    const smallPhotoUrl = `https://theunitedstates.io/images/congress/225x275/${results.member_id}.jpg`
    // let cid = results.crp_id
    // let contributionTotals = await FinanceService.getContributionTotals(cid);
    // let topIndustries = await FinanceService.getTopIndustries(cid);
    // let topContributors = await FinanceService.getTopContributors(cid);
    
    return {...results, photoUrl, smallPhotoUrl};
  };
    const reps = representatives.map((rep) => {
      return repsResponse(rep);
  });

  return Promise.all(reps).then(repsArray => ({representatives: repsArray, state: districtObject.state,district: districtObject.district}))
}

representativeRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { address } = req.body;

  if(!address) {
    return res.status(400).json({error: 'Must include address in request body'});
  }

  getAll(address).then(reps => res.json(reps)).catch(next);

});
 

module.exports = representativeRouter;

