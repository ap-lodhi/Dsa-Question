// Search Numbers Ended
// Description

// You are given an array a of N integers a1,a2,…,aN.

// Your task is to respond to the queries like "How many numbers' values are betweenlandrinclusive ?".


// Input
// Input Format

// The first line of the input containsN— the length of the array.

// The second line containsNspace-separated integers a1,a2,…,aN.

// The third line contains integerk— the number of queries.

// The followingklines contain a pair of integersl r— query, described above.

// Constraints

// 1 <= N <= 10^5

// -10^9 <= a[i] <= 10^9

// 1 <= k <= 10^5

// -10^9 <= l <= r <= 10^9


// Output
// The output must consist of k integers — responses for the queries.


// Sample Input 1 

// 5
// 10 1 10 3 4
// 4
// 1 10
// 2 9
// 3 4
// 2 2
// Sample Output 1

// 5 2 2 0
// Hint

// For the first query, there are 5 numbers (10,1,10,3,4) in an array that lie between 1 and 10 inclusive, so the answer is 5.

// For the second query, there are 2 numbers (3,4) in an array that lie between 2 and 9 inclusive, so the answer is 2.

// For the third query, there are 2 numbers (3,4) in an array that lie between 3 and 4 inclusive, so the answer is 2.

// For the fourth query, there are no numbers in an array that lie between 2 and 2 inclusive, so the answer is 0. 
function upperBound(arr,y){
    var  l=0; 
    h = arr.length-1;
    while(l<=h){
        var mid  = Math.floor((l+h)/2);
        if(arr[mid] <=y){
            l= mid+1
        }
        else{
            h = mid-1
        }
    }
    return h;
}
function lowerBound(arr,x){
    var l=0; 
    var h = arr.length-1;
    while(l <=h){
        var mid = Math.floor((l+h)/2);
        if(arr[mid] >=x){
            h = mid-1;
        }
        else{
            l =mid+1;
        }
    }
    return l;
    
}
function search(arr, x, y){
    var count  =0;
    count  = upperBound(arr,y)-lowerBound(arr,x)+1
    return count;
}
function runProgram(input) {
    input = input.split("\n");
    var n = +input[0]
    var  arr  = input[1].split(" ").map(Number);
    arr.sort(function(a,b){
        return a-b;
    });
    var k = +input[2]
    var res  = ""
    for(var i=3; i<input.length; i++){
        var [l,r] =input[i].split(" ").map(Number)
       var ans  = search(arr,l ,r)
       
       res += ans +" "
       
    }
   console.log(res)
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
