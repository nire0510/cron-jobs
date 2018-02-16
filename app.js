const cron = require('cron');
const fs = require('fs');
const path = require('path');

fs.readdirSync('jobs')
  .filter(file => fs.statSync(path.join('jobs', file)).isFile() && file !== 'template.js')
  .forEach((file) => {
    /* eslint-disable */
    const job = require(path.resolve('./jobs', file));
    /* eslint-enable */

    if (job.time && job.enabled && typeof job.run === 'function') {
      /* eslint no-new: "off" */
      new cron.CronJob({
        cronTime: job.time,
        onTick: job.run,
        start: true,
        timeZone: job.timezone || 'Asia/Jerusalem',
        context: job.context,
        runOnInit: job.immediate || false,
      });
    }
  });
