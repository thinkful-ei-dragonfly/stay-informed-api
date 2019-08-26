const express = require('express');
//const path = require('path');
//const RepresentativeService = require('./representative-service');
//const ProPublicaService = require('../propublica/propublica-service');
const FinanceService = require('../finances/finances-service');
const financesRouter = express.Router();
const jsonBodyParser = express.json();

async function getFin(cid) {
    console.log(`cid: ${cid}`);
    // const results = rep.results[0]
    // const photoUrl = `https://theunitedstates.io/images/congress/450x550/${results.member_id}.jpg`
    // const smallPhotoUrl = `https://theunitedstates.io/images/congress/225x275/${results.member_id}.jpg`
    // let cid = results.crp_id
    let contributionTotals = await FinanceService.getContributionTotals(cid);
    let topIndustries = await FinanceService.getTopIndustries(cid);
    let topContributors = await FinanceService.getTopContributors(cid);
    
    return {topContributors, topIndustries, contributionTotals};
  };


financesRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { cid } = req.body;
  if(!cid) {
    return res.status(400).json({error: 'Must include crp id in request body'});
  }
  getFin(cid).then(finObj => res.json(finObj)).catch(next);
});
 

module.exports = financesRouter;

