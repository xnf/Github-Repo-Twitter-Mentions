require('dotenv')
  .config();

const Twitter = require('twitter');
const logger = require('./logger');
const chalk = require('chalk');

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

const service = {
  searchTweets: async (title, count) => {
    const q = `url:${title}`;
    logger.debug(`Doing search/tweets for ${q} with limit ${chalk.bgBlackBright(count)}`);
    return client.get('search/tweets', {
      q,
      count
    });
  }
};

module.exports = service;
