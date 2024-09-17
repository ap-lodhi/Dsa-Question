// To reverse a string in the same array without using an extra array, you can use a two-pointer approach.

// Here is an example code snippet in JavaScript:

console.log("first")
function reverse(str){
    var left = 0;
    var right = str.length-1;
    while(left<right){
        var temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left++
        right--
    }
    return str
}

var  arr = ["h", "e", "l", "l", "o"];

console.log(reverse(arr))


var a  = 10;
var  b = 12 ;
var temp 
temp = a;
a = b;
b = temp;
console.log(a,b)