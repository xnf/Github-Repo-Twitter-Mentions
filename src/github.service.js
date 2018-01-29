const request = require('request-promise-native');

const BASE_URL = `https://api.github.com/search/repositories`;

const service = {
    findReposByTopic: async (title, limit = 10) => {
        return await request(`${BASE_URL}?q=topic:${title}&per_page=${limit}`);
    }
};

module.exports = service;