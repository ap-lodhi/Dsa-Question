// Upper Bound in LogN Ended
// Description

// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

// -> Test cases are such that there is always one number greater than k

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION


// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100


// Output
// Output upper bound


// Sample Input 1 

// 10 3
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 1

// 2
// Sample Input 2 

// 10 4
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 2

// 4   

function binary(arr,start,end,k){
    var mid ;
    var result =1;
    while(start <= end){
        mid   =Math.floor((start+end)/2)
        if(arr[mid] <=k){
           // result  =mid+1
            start =mid+1;
        }
       
        else{
            result =mid
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