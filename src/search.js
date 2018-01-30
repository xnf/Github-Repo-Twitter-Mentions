const githubService = require('./github.service');
const twitterService = require('./twitter.service');
const view = require('./view');

const searchTweetsForRepo = async (repo, count) => {
  const tweetsByRepo = await twitterService.searchTweets(repo.html_url, count);
  view.renderRepo(repo);
  view.renderTweets(tweetsByRepo.statuses);
};

const searchTweetsForRepos = async (topic, countRepos, countTweets) => {
  const reposByTopic = await githubService.findReposByTopic(topic, countRepos);
  reposByTopic.forEach(repo => searchTweetsForRepo(repo, countTweets));
};

module.exports = searchTweetsForRepos;
