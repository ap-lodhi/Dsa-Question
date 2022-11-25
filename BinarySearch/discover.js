// Discover number Ended
// Description

// You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.


// Input
// Input Format

// The first line contains two integers, N and Q, denoting the size of array A and number of queries.

// The second line contains N space separated integers, denoting the array of elements Ai.

// The next Q lines contain a single integer X per line.

// Constraints

// 1 <= N, Q <= 10^5

// 1 <= Ai <= 10^9

// 1 <= X <= 10^9


// Output
// Output Format

// For each query, print YES if the X is in the array, otherwise print NO.


// Sample Input 1                                                   Sample Output 1

// 5 10                                                                   YES                                                    
// 50 40 30 20 10                                                          YES
// 10                                                                        YES
// 20                                                                      YES
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100


// YES
// YES
// YES
// YES
// YES
// NO
// NO
// NO
// NO
// NO

function binary(arr,start,end,k,mid){
    
    if(start <= end){
        mid   =Math.floor((start+end)/2)
        if(arr[mid] ==k){
            return "YES";
        }
        else if(arr[mid] <k){
            return binary(arr,mid+1,end,k,mid)
        }else{
          return binary(arr,start,mid-1,k,mid)
        }
    }
    return "NO";
    
}
function runProgram(input) {
  input =input.split("\n");
   var  [n,k ] =input[0].split(" ").map(Number);
   var arr = input[1].split(" ").map(Number);
   
   
   arr.sort(function(a,b){
       return a-b;
   })
   var start  = 0;
   var end  =arr.length-1;
   var mid ;
   for(var i=2; i<input.length; i++){
   var ans  = binary(arr,start,end,+input[i],mid)
   console.log(ans)
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