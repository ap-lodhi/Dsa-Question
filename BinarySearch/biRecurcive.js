// Binary Search - Recursive Ended
// Description

// Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

// In case k is present among those n numbers, print 1

// Else print -1


// Input
// Input Format :

// First line of input contains n and k separated by a space

// Next line contains n space separated integers

// Constraints:

// n<1000


// Output
// In casekis present among those n numbers, print 1

// Else print -1


// Sample Input 1 

// 5 0
// 2 -2 0 3 4
// Sample Output 1

// 1 
function binary(arr,start,end,k,mid){
    
    if(start <= end){
        mid   =Math.floor((start+end)/2)
        if(arr[mid] ==k){
            return 1;
        }
        else if(arr[mid] <k){
            return binary(arr,mid+1,end,k,mid)
        }else{
           return binary(arr,start,mid-1,k,mid)
        }
    }
    return -1;
    
}
function runProgram(input) {
  input =input.split("\n");
   var  [n,k ] =input[0].split(" ").map(Number);
   var arr = input[1].split(" ").map(Number);
   
   arr.sort(function(a,b){
       return a-b;
   })
   var start  = 0;
   var end  =arr.length-1;
   var mid ;
   var ans  = binary(arr,start,end,k,mid)
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