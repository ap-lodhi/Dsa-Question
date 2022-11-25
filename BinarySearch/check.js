// Check if Sorted and rotated using binary search Ended
// Description

// Given an array of N distinct integers. Check if this array is sorted and rotated counter-clockwise.

// A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.


// Input
// Input Format

// First line consists of integer N

// Second consists of N integers separated by spaces.

// Constraints

// 1 <= N <= 1000


// Output
// Print "YES" if the array is sorted and rotated at least once else print "NO"


// Sample Input 1 

// 6
// 3 4 7 9 1 2
// Sample Output 1

// YES  
function binaryTrick(arr, s, e, k){
    var m   = Math.floor((s+e)/2);
    if(arr[m+1] < arr[m] && (arr[m-1] < arr[m] || m == 0)){
        return m;
    }
    if(s >= e){
        return -1;
    }
    if(k > arr[m]){
        return binaryTrick(arr, s, m, k);
    }else{
        return binaryTrick(arr, m+1, e, k);
    }
}


function runProgram(input) {
    input = input.split("\n");
    var a = +input[0];
    var arr = input[1].split(" ").map(Number);
    var r = binaryTrick(arr, 0, a-1, arr[0]);
    var p = binaryTrick(arr, 0, r-1, arr[0]);
    var q = binaryTrick(arr, r+1, a-1, arr[0]);
    if(r !== -1 && p+q == -2 && arr[r+2] > arr[r+1]){
        console.log("YES");
    }else{
        console.log("NO");
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