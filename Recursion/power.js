
/**Power Function - Recursive Ended
Description

Given two integers a and b, we need to find the value of a^b recursively.

Expected Time Complexity - O(logb).


Input
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).


Output
For each test case, print the answer: The value of a^b.


Sample Input 1 

2 4
Sample Output 1

16 */









function pow(a, b){
    var p = 0;
    if(b === 0){
        return 1;
    }
    return a*pow(a, b-1);
}

function runProgram(input) {
    input = input.split(" ");
  var a = +input[0];
  var b = +input[1];
  console.log(pow(a, b));
  
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