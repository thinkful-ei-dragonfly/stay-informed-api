const express = require('express');
const path = require('path');
const { NEWS_API_KEY } = require('./config');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);

const newsRouter = express.Router();
const jsonBodyParser = express.json();

newsRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { senator1, senator2, representative1 } = req.body;

  // join all politican names in order to make an efficient fetch and collect articles about all
  // TODO consider only last names? test.
  // Fetch requires URL encoded, but I think module is handling
  const queryString = `${senator1} ${senator2} ${representative1}`
    
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
  // get today's date in string form YYYY-MM-DD
    let dateObj = new Date();
    let today = dateObj;
    const publishStartDateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // currently using a 7 day trailing period, i.e., get articles within the last week
    let trailingDateObj = new Date();
    trailingDateObj.setDate(trailingDateObj.getDate() - 7);
    const publishTrailingStr = `${trailingDateObj.getFullYear()}-${trailingDateObj.getMonth() + 1}-${trailingDateObj.getDate()}`;
    console.log('publishStartDateStr: ', publishStartDateStr)
    console.log('trailingStartDateStr: ', publishTrailingStr)

    //  To query everything
    //  You must include at least one q, source, or domain
    //  TODO consider q advanced search specifications i.e. OR or MUST APPEAR
     newsapi.v2
       .everything({
         q: queryString,
        //  sources: 'bbc-news,the-verge',
         // domains: 'bbc.co.uk,techcrunch.com',
         from: publishStartDateStr,
         to: publishTrailingStr,
         language: 'en',
         sortBy: 'relevancy',
         page: 1,  // Huh? Page? 0 based?
       })
       .then(response => {
         console.log(response);
         // TODO 
         return response.status(201).json()    
       })
       .catch(error => console.error(error.message));
  })
  .catch(error => {
    res.status(400).send({ message: 'oops! Something went wrong with news fetch.'})
  });
