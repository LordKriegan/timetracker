const parser = require('./parser');

parser('./timetracker.xlsx', 1, (data) => {
    console.log(data);
})