const chalk = require('chalk');
const logger = require('./src/logger');
const init = require('./src/init');
const githubService = require('./src/github.service');
const twitterService = require('./src/twitter.service');
const _ = require('lodash');

const getTweetsForThisRepo = async (repo) => {
  const repoTitle = `${chalk.bgBlackBright(repo.name)} by ${chalk.bgBlackBright(repo.owner.login)}`;
  const tweets = await twitterService.searchTweets(repo.url);
  if (_.isEmpty(tweets.statuses)) {
    logger.info(`\tNobody talks about ${repoTitle}`);
  } else {
    logger.info(`\tLook who is talking about ${repoTitle}`);
    tweets.statuses.forEach(tweet => logger.info(tweet));
  }
};

const getTweetsForRepos = async (topic, count) => {
  logger.debug(`Looking for ${count} repos and ${count} tweets on topic '${chalk.bgBlackBright(topic)}'`);
  (await githubService.findReposByTopic(topic, count)).forEach(repo => getTweetsForThisRepo(repo));
};

try {
  const config = init(process.argv.slice(2));
  getTweetsForRepos(config.topic, config.count);
} catch (e) {
  logger.error(e);
}
