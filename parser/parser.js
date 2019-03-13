const parseXlsx = require('excel');

excel2json = (file, sheets, cb) => {
    parseXlsx.default(file, sheets)
        .then((data) => {
            /* 
                the timetrackers first 2 rows are junk data... one is the header, next are column names...
                thus ive sliced them out of the array and mapped over the rest
            */
            cb(data.slice(2).map((elem) => {
                    return {
                        activityNum: elem[1],
                        activityDesc: elem[2],
                        activityTime: (parseInt(elem[3].split(":")[0]) * 60) + parseInt(elem[3].split(":")[1]),
                        activityPriority: elem[4].toLowerCase() || 'normal',
                        skipActivity: false,
                        completed: false
                        }
                    }
                )
            );
        }
    );
}

module.exports = excel2json;