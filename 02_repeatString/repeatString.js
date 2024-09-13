const repeatString = function(string, num) {
if(num < 0){
    return "ERROR";
}
let result = "";
for(let i = 0; i < num; i++){
    result += string;
}
return result;
};
let string = "Yap";
let num = 10;
// Do not edit below this line
module.exports = repeatString;
