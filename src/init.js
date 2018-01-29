const _ = require('lodash');
const logger = require('./logger');

const DEFAULT_COUNT = 10;

const init = (args) => {
  if (_.isEmpty(args) || !_.isArray(args)) {
    logger.info(`Usage: npm start [topic] [count]
        [topic] = partial search of topics in GitHub
        [count] = how many repos to process. 0<count<=10`);
    process.exit(0);
  }
  const topic = String(args[0]);
  const preferredCount = parseInt(args[1], 10);
  return {
    topic,
    count: preferredCount > 0 && preferredCount <= DEFAULT_COUNT ? preferredCount : DEFAULT_COUNT,
  };
};

module.exports = init;
