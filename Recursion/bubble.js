// Recursive Bubble sort Ended
// Description

// You are given an array ofNunsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.

// USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.




// Input
// Input Format

// First line of input contains N

// Second line of input contains N numbers

// Constraints

// N < 500


// Output
// Output the numbers given after sorting it in increasing order


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9
function bubble(arr, n){
    if(n === -1){
        return arr;
    }
    for(var i=0; i<n-1; i++){
        if(arr[i] > arr[i+1]){
            var t = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = t;
        }
    }
    
    bubble(arr, n-1);
    return arr;
}


function runProgram(input) {
    input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(bubble(arr, n, 0, 0).join(" "));
  
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