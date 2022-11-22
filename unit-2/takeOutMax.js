// Take out maximum Ended
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.

function runProgram(input) {
    // Write code here
   input = input.split("\n")
   var n1 =input[0].split(" ").map(Number);
   var n = +n1[0];
   var k = +n1[1];
   var arr  = input[1].split(" ").map(Number);
  //  console.log(n,k,arr)
  var sum =0;
  var max  =0;
  for(var i=0; i<k; i++){
      sum += arr[i]
      
  }
   if(sum >max){
       max = sum
   }
   for(var i=k; i<n; i++){
       sum = sum +arr[i]
       sum = sum -arr[i-k]
   
    if(sum >max){
       max = sum
   }
   }
   console.log(max)
  
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