const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      timestamp: true,
    }),
    new winston.transports.File({
      filename: './logs/combined.log',
      timestamp: true,
    }),
    new winston.transports.Console({
      format: winston.format.simple(),
      timestamp: true,
      colorize: true,
    }),
  ],
});

module.exports = logger;
