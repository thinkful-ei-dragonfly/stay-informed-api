const fetch = require('node-fetch');
const config = require('../config');
const ProPublicaService = require('../propublica/propublica-service');
const FinanceService = require('../finances/finances-service');

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

        Object.keys(response.divisions).forEach(item => {
          if (item.includes(`/state:${stateCode}/cd:`)) {
            districtCode = item.split(`/state:${stateCode}/cd:`)[1];
          }
        });
        // Service API call to other APIS
        // congressionalDistrict = stateCode.toUpperCase() + districtCode;
        // console.log(congressionalDistrict);

        let districtObj = {
          state: stateCode,
          district: districtCode
        };

        // temporarily sending back state and district
        return districtObj;
      });
  }
};
// const getAll = async (req, res) => {
//   const districtObject = await RepresentativeService.getDistrict(req.body.address);

//   const representatives = await ProPublicaService.getReps(districtObject.state, districtObject.district);

//   //memberDetails[i].results[0].crp_id

//   await representatives.forEach(rep => {
//     const cid = rep.results[0].crp_id
//     const contributionTotals = await FinanceService.getContributionTotals(cid);
//     const topIndustries = await FinanceService.getTopIndustries(cid);
//     const topContributors = await FinanceService.getTopContributors(cid);
//     rep.results.contribs = topContributors;
//     rep.results.industries = topIndustries;
//     rep.results.contTotals = contributionTotals;
//   })
//   res.json(representatives);

module.exports = RepresentativeService;
