// Search in sorted and rotated array Ended
// Description

// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.





// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

// Note: Array contains all distinct elements.


// Input
// Input Format

// First line consists of n and k separated by space.

// Second line consists of n integers separated by spaces

// Constraints

// 1 <= n <= 50

// k <= 50






// Output
// Print index of the target element


// Sample Input 1 

// 5 1
// 3 4 5 1 2
// Sample Output 1

// 3
// Sample Input 2 

// 6 6
// 3 4 7 9 1 2
// Sample Output 2



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

function binaryTrick1(arr, s, e, k){
    var m   = Math.floor((s+e)/2);
    if(arr[m] === k){
        return m;
    }
    if(s >= e){
        return -1;
    }
    if(k < arr[m]){
        return binaryTrick1(arr, s, m, k);
    }else{
        return binaryTrick1(arr, m+1, e, k);
    }
}
function runProgram(input) {
    input = input.split("\n");
    var a = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    var ans = binaryTrick(arr, 0, a[0]-1, arr[0]);
    // console.log(ans);
    
    if(a[1] < arr[0]){
        console.log(binaryTrick1(arr, ans, a[0]-1, a[1]))
    }else{
        console.log(binaryTrick1(arr, 0, ans-1, a[1]))
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