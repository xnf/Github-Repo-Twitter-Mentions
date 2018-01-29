const chalk = require('chalk');
const logger = require('./src/logger');
const init = require('./src/init');
const githubService = require('./src/github.service');
const twitterService = require('./src/twitter.service');
const _ = require('lodash');

const getTweetsForThisRepo = async (repo, count) => {
  const repoTitle = `${chalk.bgBlackBright(repo.name)} by ${chalk.bgBlackBright(repo.owner.login)}`;
  twitterService.searchTweets(repo.url, count)
    .then((tweets) => {
      if (_.isEmpty(tweets.statuses)) {
        logger.info(`\tNobody talks about ${repoTitle}`);
      } else {
        logger.info(`\tWho is talking about ${repoTitle}`);
        tweets.statuses.forEach(tweet => logger.info(tweet));
      }
    });
};

const getTweetsForRepos = async (topic, countRepos, countTweets) => {
  logger.info(`Looking for ${countRepos} repos and ${countTweets} tweets on topic '${chalk.bgBlackBright(topic)}'`);
  (await githubService.findReposByTopic(topic, countRepos)).forEach(repo => getTweetsForThisRepo(repo, countTweets));
};

try {
  const { topic, countRepos, countTweets } = init(process.argv.slice(2));
  getTweetsForRepos(topic, countRepos, countTweets);
} catch (e) {
  logger.error(e);
}
