// const parseXlsx = require('excel');

// const excel2json = (file, sheets, cb) => {
//     parseXlsx.default(file, sheets)
//         .then((data) => {
//             /* 
//                 the timetrackers first 2 rows are junk data... one is the header, next are column names...
//                 thus ive sliced them out of the array and mapped over the rest
//             */
//             cb(data.slice(2).map((elem) => {
//                     return {
//                         activityNum: elem[1],
//                         activityDesc: elem[2],
//                         activityTime: (parseInt(elem[3].split(":")[0]) * 60) + parseInt(elem[3].split(":")[1]),
//                         activityPriority: elem[4].toLowerCase() || 'normal',
//                         skipActivity: false,
//                         completed: false
//                         }
//                     }
//                 )
//             );
//         }
//     );
// }

// const parseXlsx = require('excel-as-json').processFile;

// const excel2json = (file, sheet, cb) => {
//     console.log(file, sheet);
//     parseXlsx(file, null, {sheet: sheet}, cb)
// }   

const parseXlsx = require('convert-excel-to-json');

const excel2json = (file, sheetNum) => {

    const data = parseXlsx({ sourceFile: file });
    let newData = {}
    for (key in data) {
        console.log(data[key])
        newData[key] = data[key].slice(2).map((elem) => {
            return {
                activityNum: elem['B'],
                activityDesc: elem['C'],
                activityTime: (parseInt(elem['D'].split(":")[0]) * 60) + parseInt(elem['D'].split(":")[1]),
                activityPriority: elem['E'] || 'normal',
                skipActivity: false,
                completed: false
            }
        })
    }
    return newData;
}

module.exports = excel2json;