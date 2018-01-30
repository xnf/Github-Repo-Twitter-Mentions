const request = require('request-promise-native');
const base64 = require('base-64');
const logger = require('./src/logger');
require('dotenv')
  .config();

const AUTH_RESOURCE_URL = 'https://api.twitter.com/oauth2/token';

const processError = (message) => {
  logger.error(message);
};

const fetchToken = async (consumerKey, consumerSecret) => {
  try {
    const authToken = base64.encode(`${consumerKey}:${consumerSecret}`);
    const response = await request.post({
      url: AUTH_RESOURCE_URL,
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: 'grant_type=client_credentials',
    });
    return JSON.parse(response).access_token;
  } catch (e) {
    throw new Error(e.response.body);
  }
};

(async () => {
  const consumerKey = process.env.TWITTER_CONSUMER_KEY;
  const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
  if (!consumerKey || !consumerSecret) {
    processError('Consumer Key and Consumer Secret are required in .env file');
  } else {
    try {
      const accessToken = await fetchToken(consumerKey, consumerSecret);
      logger.warn(`Add this to the .env file\nTWITTER_BEARER_TOKEN=${accessToken}`);
    } catch (e) {
      logger.error(e);
    }
  }
})();

