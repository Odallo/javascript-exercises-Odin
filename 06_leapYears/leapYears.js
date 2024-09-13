const leapYears = function(year) {
const divisibleByFour = year % 4 === 0;
const isCentury = year % 100 === 0;
const isDivisibleByFourHundred = year % 400 === 0 ;

if(
    divisibleByFour && !isCentury || isDivisibleByFourHundred) {
        return true;
    }else{
        return false;
    }
};

var year = 1910;

// Do not edit below this line
module.exports = leapYears;
