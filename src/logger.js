const winston = require('winston');
const dateformat = require('dateformat');
const chalk = require('chalk');
require('dotenv')
  .config();

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: process.env.VERBOSITY_LEVEL || 'info',
      timestamp: () => dateformat(Date.now(), 'yyyy-mm-dd HH:MM:ss.l'),
      formatter: (options) => {
        const { message } = (options.message !== undefined) ? options : '';

        let meta = '';

        if (options.meta && Object.keys(options.meta).length) {
          meta = `\n\t ${JSON.stringify(options.meta)}`;
        }

        let level = options.level.toUpperCase();

        switch (level) {
          case 'INFO':
            level = chalk.cyan(level);
            break;

          case 'WARN':
            level = chalk.yellow(level);
            break;

          case 'DEBUG':
            level = chalk.blue(level);
            break;

          case 'ERROR':
            level = chalk.red(level);
            break;

          default:
            break;
        }

        return `[${options.timestamp()}][${level}] ${message} ${meta}`;
      },
    }),
  ],
});
