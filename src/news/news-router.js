const express = require('express');
const path = require('path');
const config = require('../config');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const newsRouter = express.Router();
const jsonBodyParser = express.json();

// This is using the News API node module, the everything method calls the /everything endpoint of the external news API
newsRouter
  .post('/', jsonBodyParser, (req, res, next) => {
    const { senator1_first, senator1_last, senator2_first, senator2_last, representative1_first, representative1_last } = req.body;
    // build custom search query to only pull exact match for full name for each representative
    const queryString = `(${senator1_first} AND ${senator1_last}) OR (${senator2_first} AND ${senator2_last}) OR (${representative1_first} AND ${representative1_last})`;
    
    newsapi.v2
      .everything({
        q: queryString,
        language: 'en',
        sortBy: 'relevance',
        page: 1,
      })
      .then(response => {
        return res.status(201).json(response);
      })
      .catch(error => {
        console.error(error.message)
        return res.json({error: error.message})
      });
  })

module.exports = newsRouter;