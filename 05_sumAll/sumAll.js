const sumAll = function(x,y) {
let result = 0;
let max = Math.max(x,y);
let min = Math.min(x,y);


if ((x || y) < 0 || (x || y) % 1 !== 0 || typeof x !== "number" || typeof y !== "number"){
    return 'ERROR';
} else {
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
