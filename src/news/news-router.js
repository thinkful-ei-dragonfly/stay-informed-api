const express = require('express');
const path = require('path');
const config = require('../config');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
// const newsService = require('./news-service')
const newsRouter = express.Router();
const jsonBodyParser = express.json();

// TODO refactor logic in this function to make it cleaner and more readable
// TODO still use the module? could perhaps handle ourselves.
newsRouter
  .post('/', jsonBodyParser, (req, res, next) => {
    const { senator1_first, senator1_last, senator2_first, senator2_last, representative1_first, representative1_last } = req.body;
    // console.log('senator1: ', senator1)
    // join all politican names in order to make an efficient fetch and collect articles about all
    // TODO consider only last names? test.
    // Fetch requires URL encoded, but I think module is handling
    const queryString = `(${senator1_first} AND ${senator1_last}) OR (${senator2_first} AND ${senator2_last}) OR (${representative1_first} AND ${representative1_last})`;
    console.log('queryString: ', queryString)
    // const months = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ];

    // get today's date in string form YYYY-MM-DD
    // let dateObj = new Date();
    // let today = dateObj;
    // // TODO REMOVE TEMP ZERO
    // const publishStartDateStr = `${today.getFullYear()}-0${today.getMonth() +
    //   1}-${today.getDate()}`;

    // // currently using a 7 day trailing period, i.e., get articles within the last week
    // let trailingDateObj = new Date();
    // trailingDateObj.setDate(trailingDateObj.getDate() - 7);
    // // TODO REMOVE TEMP ZERO
    // const publishTrailingStr = `${trailingDateObj.getFullYear()}-0${trailingDateObj.getMonth() +
    //   1}-${trailingDateObj.getDate()}`;
    // console.log('publishStartDateStr: ', publishStartDateStr);
    // console.log('trailingStartDateStr: ', publishTrailingStr);

    //  To query everything
    //  You must include at least one q, source, or domain
    //  TODO consider q advanced search specifications i.e. OR or MUST APPEAR
    newsapi.v2
      .everything({
        q: queryString,
        //  sources: 'bbc-news,the-verge',
        // domains: 'bbc.co.uk,techcrunch.com',
        // from: publishStartDateStr,
        // to: publishTrailingStr,
        language: 'en',
        sortBy: 'relevance',
        page: 1,
      })
      .then(response => {
        // console.log('RESPONSE: ', response);
        // let resWithSubject = newsService.findName(response.articles);
        return res.status(201).send(response);
      })
      .catch(error => {
        console.error(error.message)
        return res.json({error: error.message})
      });
  })

module.exports = newsRouter;