const parseXlsx = require('excel');

excel2json = (file, sheets, cb) => {
    parseXlsx.default(file, sheets)
        .then((data) => {
            // data.splice(0,2)
            cb(data.slice(2).map((elem) => {
                    return {
                        activityNum: elem[1],
                        activityDesc: elem[2],
                        activityTime: elem[3],
                        activityPriority: elem[4].toLowerCase() || 'normal'
                        }
                    }
                )
            );
        }
    );
}

module.exports = excel2json;