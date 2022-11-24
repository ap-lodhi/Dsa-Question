// Beyond Factorial! Ended
// Description

// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).

// You have to print the result up to 4 digits after the decimal point.

// Note:- You should not be supposed to do like " finding n! and apply direct inbuilt log on top that ". Instead of that, you can use Math.log() if applicable.Also, you can't use any direct formula or perform the task iteratively - Try achieving the output recursively.

// Java Script:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed




// Input
// Input format

// Single line consists an integer N

// Constraints

// 1 <= N <= 50


// Output
// Print the result in a single line.


// Sample Input 1 

// 3
// Sample Output 1

// 1.7918`
// Hint

// ln(x ∙ y) = ln(x) + ln(y)



function log(n, s){
    if(n === 0){
        return s;
    }
    s += Math.log(n);
    return log(n-1, s);
}


function runProgram(input) {
    var n = +input;
    console.log(log(n, 0).toFixed(4));
    
}
  
if (process.env.USER === "sony") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}