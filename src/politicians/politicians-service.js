const config = require('../config');
const fetch = require('node-fetch');

const politiciansService = {
  //This gets the total contributions and spending by cid #
  getContributionTotals(cid) {
    const url = `${config.OPEN_SECRETS_BASE_URL}method=candSummary&cid=${cid}&output=json&apikey=${config.OPEN_SECRETS_API_KEY}`;

    return fetch(url)
      .then(res => res.json())
      .then(res => {
        return {
          total_donations: res.response.summary['@attributes'].total,
          spent: res.response.summary['@attributes'].spent,
          cash_on_hand: res.response.summary['@attributes'].cash_on_hand
        };
      });
  },

  getTopIndustries(cid) {
    const url = `${config.OPEN_SECRETS_BASE_URL}method=candIndustry&cid=${cid}&output=json&apikey=${config.OPEN_SECRETS_API_KEY}`;

    return fetch(url)
      .then(res => res.json())
      .then(res => {
        let industries = [];

        res.response.industries.industry.forEach(ind => {
          industries.push(ind['@attributes']);

        });
        return industries;
      });
  },

  getTopContributors(cid) {
    const url = `${config.OPEN_SECRETS_BASE_URL}method=candContrib&cid=${cid}&output=json&apikey=${config.OPEN_SECRETS_API_KEY}`;

    return fetch(url)
      .then(res => res.json())
      .then(res => {
        let contributors = [];

        res.response.contributors.contributor.forEach(ind => {
          contributors.push(ind['@attributes']);

        });
        return contributors;
      });
  },


};



module.exports = politiciansService;
