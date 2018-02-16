require('rootpath')();
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
// const logger = require('utils/logger');
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */

module.exports = {
  // job name
  name: 'Job Template',
  // short description
  description: 'A template which all other jobs be cloned from',
  // creator name
  creator: 'John Doe',
  // created date
  created: 'YYYY-MM-DD',
  // last updated date
  updated: 'YYYY-MM-DD',

  // is job enabled?
  enabled: true,
  // cron time
  time: '* * * * * *',
  // cron time timezone (default - 'Asia/Jerusalem')
  timezone: 'Asia/Jerusalem',
  // run method context
  context: null,
  // should run method be called immediattely after launch?
  immediate: false,

  // The function to fire at the specified time
  run() {
    // code goes here...
  },
};
