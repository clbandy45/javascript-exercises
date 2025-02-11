const removeFromArray = function(arr, ...rems) {
    let result = Array.from(arr);
    
    for (const rem of rems) {
        for (let i = 0; i < result.length; i++) {
    const index = result.indexOf(rem);
        if (index > -1){
            result.splice(index,1);
        }
    }}
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
