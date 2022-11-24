// Generate Permutations Ended
// Description

// Given a collection of numbers, return all possible permutations.

// NOTE:

// No two entries in the permutation sequence should be the same.

// For the purpose of this problem, assume that all the numbers in the collection are unique.

// USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION


// Input
// Input Format :

// The first line of input contain an integer n - denoting the size of array

// The next line contain n distinct integers, A[1],A[2]...A[N]

// Constraints :

// 1<= n <=6




// Output
// Print the permutations of numbers in new line seperated by space, also make sure the permutations are printed in sorted order that is "1 2 3" must come before "2 3 1". Print without quotes. See sample test case for better understanding.


// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1  


function permutation(arr, len, n, ans){
    if(len == n){
        ans += arr.join(" ").toString() + "\n";
        return ans;
    }
    for(var i=len; i<n; i++){
        var t = arr[i];
        arr[i] = arr[len];
        arr[len] = t;
        
        ans = permutation(arr, len+1, n, ans);
        
        t = arr[i];
        arr[i] = arr[len];
        arr[len] = t;
        
    }
    return ans;
}

function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    
    var ans = permutation(arr, 0, n, "");
    arr = ans.trim().split("\n");
    arr.sort();
    console.log(arr.join("\n"));
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