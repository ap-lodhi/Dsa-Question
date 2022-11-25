// Lower bound in logn Ended
// Description

// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity.
// Lower bound of a number k in a sorted list is the index of the first number which is same as k, 
//in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.


// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100


// Output
// Output lower bound


// Sample Input 1 

// 5 2
// 1 1 2 2 5
// Sample Output 1

// 2
// Sample Input 2 

// 5 3
// 1 1 2 2 5
// Sample Output 2

// -1 


function binary(arr,start,end,k){
    var mid ;
    var result =-1;
    while(start <= end){
        mid   =Math.floor((start+end)/2)
        if(arr[mid] ==k){
            result  =mid
            end =mid-1;
        }
        else if(arr[mid] <k){
            start =mid+1;
        }else{
            end =mid-1;
        }
    }
    return result;
    
}
function runProgram(input) {
  input =input.split("\n");
   var  [n,k ] =input[0].split(" ").map(Number);
   var arr = input[1].split(" ").map(Number);
   
//   arr.sort(function(a,b){
//       return a-b;
//   })
   var start  = 0;
   var end  =arr.length-1;
   
   var ans  = binary(arr,start,end,k)
   console.log(ans)
  
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