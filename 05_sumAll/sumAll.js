const sumAll = function(first, last) {
    let sum = 0;
    for(let i = 0;i < last; i++){
        sum += first + i;
    }
    return sum;
};
var first = 1;
var last = 20;

// Do not edit below this line
module.exports = sumAll;
