// N Queens Variant Ended
// Description

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, print the number of distinct solutions to the n-queens puzzle.

// queens.png

// Sample figure to understand the problem.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).


// Output
// Print the number of distinct solutions possible.


// Sample Input 1 

// 4
// Sample Output 1

// 2
// Sample Input 2 

// 1
// Sample Output 2

// 1
// Hint

// There are two distinct solutions to the 4-queens puzzle as shown below.

// [

// [".Q..",  // Solution 1

// "...Q",

// "Q...",

// "..Q."],

// ["..Q.",  // Solution 2

// "Q...",

// "...Q",

// ".Q.."]

// ]



// So the count is 2.

function isSafe(arr, r, c){
    if(r === 0){
        return true;
    }
    for(i=r; i>=0; i--){
        if(arr[i][c]){
            return false;
        }
    }
    var i = r;
    var l = c;
    for(i,l; i>=0 && l>=0; i--, l--){
        if(arr[i][l]){
            return false;
        }
    }
    i = r;
    l = c;
    for(i,l; i>=0 && l<arr.length; i--, l++){
            
        if(arr[i][l]){
            return false;
        }
    }
    return true;
}

function nQueens(arr, n, r, c){
    if(r >= arr.length){
        c++;
        return c;
    }
    
    for(var i=0; i<n; i++){
        if(isSafe(arr, r, i) === true){
            arr[r][i] = 1;
            c = nQueens(arr, n, r+1, c);
            arr[r][i] = 0;
        }
    }
    
    return c;
}


function runProgram(input) {
  var n = +input;
  var arr = new Array(n);
  for(var i=0; i<n; i++){
      arr[i] = new Array(n);
      for(var l=0; l<n; l++){
          arr[i][l] = 0;
      }
      
  }
  
  
  console.log(nQueens(arr, n, 0, 0));
  
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