const parseXlsx = require('convert-excel-to-json');

const excel2json = (file) => {
    const data = parseXlsx({ sourceFile: file });
    console.log(data);
    let newData = {}
    for (key in data) {
        newData[key] = data[key].slice(2).map((elem, id) => {
            return {
                activityNum: (id + 1),
                activityDesc: elem['C'] || "Could not retrieve activity description. Possible malformed timetracker.",
                activityTime: getActivityTime(elem['D']),
                activityPriority: elem['E'] || 'normal',
                skipActivity: false,
                completed: false
            }
        })
    }
    return newData;
}

function isValidDate(date) {
    //https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

function getActivityTime(time) {
    if (isValidDate(time)) {
        return time.getHours(time.setHours(time.getHours() - 23)) * 60 + time.getMinutes();
    } else {
        return (parseInt(time.split(":")[0]) * 60) + parseInt(time.split(":")[1])
    }
}
module.exports = excel2json;