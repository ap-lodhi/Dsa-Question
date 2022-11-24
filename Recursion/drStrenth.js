// Dr. Strange and Possibilities Ended
// Description

// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).


// Output
// Print each possible subset in a new line.

// Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.


// Sample Input 1 

// 3
// Sample Output 1


// 1 
// 1 2 
// 1 2 3 
// 1 3 
// 2 
// 2 3 
// 3 
function possible(ans, i, n){
    if(i >= n){
        return ;
    }
    
    ans += (i+1) + " ";
    console.log(ans);
   possible(ans, i+1, n);
    ans = ans.substr(0, ans.length-2);
    possible(ans, i+1, n);
    return ;
    
}

function runProgram(input) {
    var n = +input;
    var ans = "";
    console.log(" ");
    possible(ans, 0, n);
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