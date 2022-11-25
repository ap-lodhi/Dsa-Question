// Min and Max sum Ended
// Description

// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm


// Input
// Input Format:

// First line contains an integer T denoting the number of testcases.

// First line of every testcase contains two integer N and M.

// Next line contains N space separated integers denoting the elements of array


// Constraints:

// 1<=t<=10

// 1<=N<=1000

// 1<=a[i]<=1000


// Output
// For every test case print your answer in new line


// Sample Input 1 

// 1
// 5 1
// 1 2 3 4 5
// Sample Output 1

// 4 
function runProgram(input) {
    input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for(var i=0; i<t; i++){
        var [n,m] = input[line].split(" ").map(Number);
        //console.log(n,m)
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        for(var l=0; l<n-1; l++){
            for(var j=l+1; j<n; j++){
                if(arr[l] > arr[j]){
                    var temp = arr[l];
                    arr[l] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        var ans1 = 0;
        var ans2 = 0;
        
        for(var l =0; l<n-m; l++){
            ans1 += arr[l];
            // console.log("ans 1->",ans1)
        }
        for(var l =m; l<n; l++){
            ans2 += arr[l];
            // console.log("ans2->",ans2)
        }
        
console.log(ans2 - ans1);
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
