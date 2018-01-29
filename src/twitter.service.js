const Twitter = require('twitter');
require('dotenv')
  .config();

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

const service = {
  searchTweets: async (title, count) => client.get('search/tweets', {
    q: `url:${title}`,
    count,
  }),
};

module.exports = service;
