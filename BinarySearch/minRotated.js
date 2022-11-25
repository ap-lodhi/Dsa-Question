// Minimum in sorted & rotated array Ended
// Description

// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.



// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print minimum element.


// Sample Input 1 

// 10
// 4 6 7 9 10 -1 0 1 2 3
// Sample Output 1

// -1


function binaryTrick(arr, s, e, k){
    var m   = Math.floor((s+e)/2);
    if(arr[m+1] < arr[m] && (arr[m-1] < arr[m] || m == 0)){
        return m+1;
    }
    if(s >= e){
        return 0;
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
    
    if(binaryTrick(arr, 0, a-1, arr[0]) == 0){
        console.log(arr[a-186]);
        return ;
    }
    console.log(arr[binaryTrick(arr, 0, a-1, arr[0])]);
    
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