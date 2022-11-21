// Substrings with K distinct letters Ended
// Description

// Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.


// Input
// Input Format

// First line contains n and k separated by space

// Second line contains strings of length n.

// Constraints

// 1<=n<=10^6

// 1<=k<=10^6








// Output
// Print count of substrings of length k with k distinct letters


// Sample Input 1 

// 4 2
// abcc
// Sample Output 1

// 2
// Hint

// Sample 1 Explanation

// Possible substrings of length K = 2 are

// ab : 2 distinct characters

// bc : 2 distinct characters

// cc : 1 distinct character

// Only two valid substrings exist {“ab”, “bc”}.



function distict_L(arr, l, k){
    var map = new Map();
    for(var i=l; i<k; i++){
        if(map.get(arr[i]) === undefined){
            map.set(arr[i], 1);
        }else{
            return false;
        }
    }
    map = new Map();
    return true;
}


function runProgram(input) {
    input = input.split("\n");
    var a = input[0].split(" ").map(Number);
    var n = a[0];
    var k = a[1];
    var str = input[1];
    var count = 0;
    for(var i=0; i<=n-k; i++){
        if(distict_L(str, i, i+k)){
            count++;
        }
    }
    console.log(count);
   
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