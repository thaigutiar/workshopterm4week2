let number = "123.34";
let numToword = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
}
for (var i=0;i<number.length;i++){
    //console.log(number[i]);
    console.log(numToword[number[i]]);
}