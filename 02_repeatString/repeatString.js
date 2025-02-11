const repeatString = function(str,rpt) {
    let result = "";
    if (rpt < 0) {
        result = "ERROR";
    } else {
        for (let i = 0; i < rpt; i++) {
        result += str;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
