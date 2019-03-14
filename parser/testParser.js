const parser = require('./parser');

// parser('./timetracker.xlsx', 1, (err, data) => {
//     console.log("cb");
//     if (err) console.error(err);
//     else console.log(data);
// });

console.log(parser('./timetracker.xlsx', 1));