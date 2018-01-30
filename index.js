const init = require('./src/init');
const errorHandler = require('./src/error.handler');
const searchTweetsForRepos = require('./src/search');

try {
  const { topic, countRepos, countTweets } = init(process.argv.slice(2));
  searchTweetsForRepos(topic, countRepos, countTweets);
} catch (e) {
  errorHandler(e);
}
