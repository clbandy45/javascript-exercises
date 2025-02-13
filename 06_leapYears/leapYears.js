const leapYears = function(year) {

if ((year/400)%1 === 0){
    return true;
} else if ((year/100)%1 === 0) {
    return false;
} else if ((year/4)%1 === 0) {
    return true;
} else {
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;
