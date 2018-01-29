const request = require('request-promise-native');

const BASE_URL = 'https://api.github.com/search/repositories';

const makeRequestObject = url => ({
  url,
  headers: {
    'User-Agent': 'NodeJS/Request',
  },
});

const service = {
  findReposByTopic: async (title, limit = 10) => {
    const response = await request(makeRequestObject(`${BASE_URL}?q=topic:${title}&per_page=${limit}`));
    return JSON.parse(response).items;
  },
};

module.exports = service;
