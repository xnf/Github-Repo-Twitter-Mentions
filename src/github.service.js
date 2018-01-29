const request = require('request-promise-native');
const logger = require('./logger');

const BASE_URL = 'https://api.github.com/search/repositories';

const makeRequestObject = url => ({
  url,
  headers: {
    'User-Agent': 'NodeJS/Request',
  },
});

const service = {
  findReposByTopic: async (title, limit = 10) => {
    const url = `${BASE_URL}?q=topic:${title}&per_page=${limit}`;
    logger.debug(`Accessing ${url}`);
    const response = await request(makeRequestObject(url));
    return JSON.parse(response).items;
  },
};

module.exports = service;
