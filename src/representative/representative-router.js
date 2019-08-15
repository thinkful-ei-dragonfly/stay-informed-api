
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
  return Promise.all(reps).then(repsArray => ({representatives: repsArray, ...districtObject}))
}

representativeRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { address } = req.body;

  getAll(address).then(reps => res.json(reps)).catch(next);

    });
 

module.exports = representativeRouter;

