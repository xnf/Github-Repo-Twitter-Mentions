const chalk = require('chalk');
const _ = require('lodash');

const logger = require('./logger');
const stringCollapse = require('string-collapse-white-space');

const renderRepo = (repo) => {
  logger.info(`\n${chalk.bgBlackBright(repo.full_name)}
      Author:\t${repo.owner.login}
      Url:\t${repo.html_url}
      ---------------------------`);
};

const renderTweet = (tweet) => {
  const cleanText = stringCollapse(tweet.text, {
    trimLines: true,
    trimnbsp: true,
  });
  logger.info(`\t\t@${tweet.user.screen_name}: ${cleanText}`);
};

const renderNoTweets = () => {
  logger.info('\t\tNobody talks about this repo');
};

const renderTweets = (tweetsByRepo) => {
  if (_.isEmpty(tweetsByRepo)) {
    renderNoTweets();
  } else {
    tweetsByRepo.forEach(tweet => renderTweet(tweet));
  }
};

module.exports = {
  renderTweets,
  renderRepo,
};
