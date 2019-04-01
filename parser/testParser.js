const parser = require('./parser');

// parser('./timetracker.xlsx', 1, (err, data) => {
//     console.log("cb");
//     if (err) console.error(err);
//     else console.log(data);
// });
const file = process.argv[2];
console.log(file);

console.log(parser(file));