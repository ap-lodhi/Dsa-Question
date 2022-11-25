// Can be sorted ? Ended
// Description

// Given an array of distinct n integers. Check whether reversing one sub-array make the array sorted or not.

// If the array is already sorted or by reversing a subarray once make it sorted, print “YES”, else print “NO”.


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print output string in a single line.


// Sample Input 1 

// 10
// -1 0 1 2 3 10 9 7 6 4
// Sample Output 1

// YES
// Hint

// The given array can be sorted if we reverse the subarray [10,9,7,6,4]
function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    var a = [];
    var i = 0;
    var t=0;
    var s = arr[0];
    for(var l =1; l<n; l++){
        if(s > arr[l]){
            a[i] = s;
            i++;
        }else if(i > 0){
            break;
        }else{
            t = l;
        }
        s = arr[l]
    }
    if(i > 1){
        a[i] = s;
        i++;
    }
    for(var l=0; i!==l; l++){
        arr[t+l] = a[i-1-l];
    }
    for(var l=0; l<=n; l++){
        if(arr[l] > arr[l+1]){
            console.log("NO");
            return;
        }
    }
    console.log("YES")
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
