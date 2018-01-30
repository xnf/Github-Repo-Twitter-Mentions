const request = require('request-promise-native');
const logger = require('./logger');

const BASE_URL = 'https://api.github.com/search/repositories';
const SORT_ORDER = 'stars';

const makeRequestObject = url => ({
  url,
  headers: {
    'User-Agent': 'NodeJS/Request',
  },
});

const service = {
  findReposByTopic: async (title, limit = 10) => {
    const url = `${BASE_URL}?q=${title}&per_page=${limit}&sort=${SORT_ORDER}`;
    logger.debug(`Fetching ${limit} entries for ${url} sorted by ${SORT_ORDER}`);
    const response = await request(makeRequestObject(url));
    return JSON.parse(response).items;
  },
};

module.exports = service;
