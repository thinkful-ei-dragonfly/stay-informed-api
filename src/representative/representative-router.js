const express = require('express');
const path = require('path');
const RepresentativeService = require('./representative-service');
const ProPublicaService = require('../propublica/propublica-service');
const FinanceService = require('../finances/finances-service');

const representativeRouter = express.Router();
const jsonBodyParser = express.json();


async function getAll(address) {
  let districtObject = await RepresentativeService.getDistrict(address);
  // console.log(districtObject);
  let representatives = await ProPublicaService.getReps(districtObject.state, districtObject.district);

  //memberDetails[i].results[0].crp_id
  
  async function repsResponse (rep) {
    let cid = rep.results[0].crp_id
    let contributionTotals = await FinanceService.getContributionTotals(cid);
    let topIndustries = await FinanceService.getTopIndustries(cid);
    let topContributors = await FinanceService.getTopContributors(cid);
    rep.results[0].contribs = topContributors;
    rep.results[0].industries = topIndustries;
    rep.results[0].contTotals = contributionTotals;
    console.log(rep.results[0]);
  };

  console.log(`representatives: ${representatives}`);
  
  //   representatives.forEach(rep => {
  //     repsResponse(rep);
  // });

  

  // let repsResponse = representatives.map(rep => {
  //   let cid = rep.results[0].crp_id
  //   let contributionTotals = await FinanceService.getContributionTotals(cid);
  //   let topIndustries = await FinanceService.getTopIndustries(cid);
  //   let topContributors = await FinanceService.getTopContributors(cid);
  //   rep.results[0].contribs = topContributors;
  //   rep.results[0].industries = topIndustries;
  //   rep.results[0].contTotals = contributionTotals;
  //   console.log(rep.results[0]);
  // })
  return {representatives, ...districtObject};
}


representativeRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { address } = req.body;
  // console.log(address);
  // let congressionalDistrict = '';
  // let stateCode;
  // let districtCode;

  getAll(address).then(reps => res.json(reps)).catch(next);

  // RepresentativeService.getDistrict(address)
  //   .then(response => {
  //     stateCode = response.normalizedInput.state.toLowerCase();

  //     Object.keys(response.divisions).forEach(item => {
  //       if (item.includes(`/state:${stateCode}/cd:`)) {
  //         districtCode = item.split(`/state:${stateCode}/cd:`)[1];
  //       }
  //     });
  //     // Service API call to other APIS
  //     congressionalDistrict = stateCode.toUpperCase() + districtCode;
  //     console.log(congressionalDistrict);

  //     // temporarily sending back state and district
  //     res.send({
  //       state: stateCode,
  //       district: districtCode
  //     });

      // We can perform another RepresentativeService method to request ProPublica/OpenSecrets
      // and pass along the state and/or district code from this previous call
    });
 

module.exports = representativeRouter;
