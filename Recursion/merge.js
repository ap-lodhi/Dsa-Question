// Perform Merging Ended
// Description

// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code


// Input
// Input Format :

// First line contains N which is the number of integers present in both the arrays.

// Second line contains N sorted integers which are elements of first array.

// Third line contains N sorted integers which are elements of second array.



// Constraints :

// N < 1000


// Output
// Output the array formed after merging elements such that it is sorted


// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9
function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    var r = 0;
    var l = 0;
    var ans = 0;
    var arr = [];
    while(r<n && l<n){
        if(arr1[r] <= arr2[l]){
            arr[ans] = arr1[r];
            r++;
            ans++;
        }else{
            arr[ans] = arr2[l];
            l++;
            ans++;
        }
    }
    
    while(r< n){
        arr[ans] = arr1[r];
        r++;
        ans++;
    }
    while(l < n){
        arr[ans] = arr2[l];
        l++;
        ans++;
    }
  
  console.log(...arr);
  
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