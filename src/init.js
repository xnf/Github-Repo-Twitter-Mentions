const _ = require('lodash');
const logger = require('./logger');

const DEFAULT_REPO_COUNT = 10;
const DEFAULT_TWEET_COUNT = 10;

const sanitizeCount = (preferred, def) => ((preferred > 0 && preferred <= def) ? preferred : def);

const init = (args) => {
  if (_.isEmpty(args) || !_.isArray(args)) {
    logger.info(`Usage: npm start [topic] [countRepos] [countTweets]
        [topic] = partial search of topics in GitHub
        [countRepos] = how many repos to output. 0<countRepos<=10
        [countTweets] = how many tweets to output. 0<countTweets<=10`);
    process.exit(0);
  }
  const topic = String(args[0]);
  const preferredRepoCount = parseInt(args[1], 10);
  const preferredTweetCount = parseInt(args[2], 10);
  logger.info(`Looking for ${preferredRepoCount} repos and ${preferredTweetCount} tweets on topic '${topic}'`);
  return {
    topic,
    countRepos: sanitizeCount(preferredRepoCount, DEFAULT_REPO_COUNT),
    countTweets: sanitizeCount(preferredTweetCount, DEFAULT_TWEET_COUNT),
  };
};

module.exports = init;
