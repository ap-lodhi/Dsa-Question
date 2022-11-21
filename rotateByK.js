// Rotate the array returns back Ended
// Description

// You are given an array of n elements and an integer k, you need to rotate the array by k units.



// Input
// First-line contains t, which is the number of test cases

// For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated

// The second line of each test case contains n numbers which represent the elements of the array

// Constraints

// 1<=T<=20

// 1<=N<=50000, 0<=K<=1000000000

// 1 <= Ai <= 1000000


// Output
// out put N elements, elements of the array , rotated by K units



// Sample Input 1 

// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3
// Sample Output 1

// 2 1
// 1 2
// 3 1 2




function swap(arr,a,b){
    var temp =arr[a];
    arr[a] =arr[b];
    arr[b] =temp;
}
function reverse_arr(arr,left,right){
    var start =left;
    var end=right;
    while(start<end){
        swap(arr,start,end);
        start++
        end--
    }
}
function runProgram(input) {
input = input.split("\n");
var test = +input[0];
var line = 1;
for(var i=0; i<test; i++){
    var n1 =input[line].split(" ").map(Number);
   var n =+n1[0];
    var  k = n1[1];
     line++;
    var arr =input[line].split(" ").map(Number);
       line++;  
      var l=0;
      var r =n-1;
      k= k%n;
       reverse_arr(arr,l,r);
        reverse_arr(arr,l,k-1)
         reverse_arr(arr,k,n-1)
         console.log(arr.join(" "))
      
  
   }
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