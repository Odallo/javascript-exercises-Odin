const removeFromArray = function(array, num) {
    const newArray = [];
    array.forEach((item) =>{
        if (!args.includes(item)) {
            newArray.push(item);
          }
    })
    return newArray;
};

let array = [1, 2, 3, 4, 5, 6,];
let num = 5;


// Do not edit below this line
module.exports = removeFromArray;
