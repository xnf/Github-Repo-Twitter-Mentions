require('dotenv')
  .config();

const _ = require('lodash');
const logger = require('./logger');

const DEFAULT_REPO_COUNT = 10;
const DEFAULT_TWEET_COUNT = 10;

const sanitizeCount = (preferred, def) => ((preferred > 0 && preferred <= def) ? preferred : def);

const sanitizeArgs = (args) => {
  if (_.isEmpty(args) || !_.isArray(args)) {
    logger.info(`Usage: npm start [topic] [countRepos] [countTweets]
        [topic] = partial search of topics in GitHub
        optional [countRepos] = how many repos to output. 0<countRepos<=10
        optional [countTweets] = how many tweets to output. 0<countTweets<=10`);
    process.exit(0);
  }
};

const sanitizeEnv = (env) => {
  if (!env.TWITTER_BEARER_TOKEN) {
    throw new Error('Bearer Token is required in .env file. Refer to README.md for more info');
  }
};

const init = (args) => {
  sanitizeEnv(process.env);
  sanitizeArgs(args);
  const topic = String(args[0]);
  const countRepos = sanitizeCount(parseInt(args[1], 10), DEFAULT_REPO_COUNT);
  const countTweets = sanitizeCount(parseInt(args[2], 10), DEFAULT_TWEET_COUNT);
  logger.info(`Looking for ${countRepos} repos and ${countTweets} tweets on topic '${topic}'`);
  return {
    topic,
    countRepos,
    countTweets,
  };
};

module.exports = init;
