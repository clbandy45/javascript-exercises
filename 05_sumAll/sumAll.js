const sumAll = function(x,y) {
let result = 0;
let max = Math.max(x,y);
let min = Math.min(x,y);

    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
