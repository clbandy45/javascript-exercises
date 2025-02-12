const sumAll = function(x,y) {
let result = 0;
let max = Math.max(x,y);
let min = Math.min(x,y);

//isNaN is failing the non-numbers
if ((x || y) < 0 || (x || y) % 1 !== 0 || isNaN(x || y)){
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
