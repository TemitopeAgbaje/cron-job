const cron = require("node-cron");

logMessage = () =>
  console.log("Cron job executed at:", new Date().toLocaleString());

// Schedule the cron job to run every minute
cron.schedule("* * * * *", () => {
  logMessage();
});

// Schedule tasks to be run on the server.
//still the same thing 
// cron.schedule('* * * * *', function() {
//     console.log('running a task every minute');
//   });

/**
 * the way it works
 */
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

/**
 * Example
 * '59 23 * * *'  - 11:59 PM every day
 * '0 0 * * 3'   - every Wednesday
 * '0 0 21 * *' -  every twenty-first day of the month
 */
