// Love of Samosa Ended
// Description

// Amit went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street and unfortunately, all of them have only one samosa remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

// Find the maximum samosas that Amit can eat.


// Input
// Input Format

// First line contains two space-separated integers N and K.

// Second line contains N space separated integers, the cost of a samosa on the shops.

// Output Format

// 1 ≤ N ≤ 1000

// 0 ≤ K ≤ 1000

// 0 ≤ Ai ≤ 100




// Output
// Output Format

// Print the required answer




// Sample Input 1 

// 4 10
// 5 4 2 4
// Sample Output 1

// 3
function runProgram(input) {
    input = input.split("\n");
   var[n,k]= input[0].split(" ").map(Number);
   var arr  = input[1].split(" ").map(Number);
   arr.sort(function(a,b){
       return a-b;
   })
   var sum =0;
   var count  = 0;
   var i=0
   while (sum <= k){
        sum = sum + arr[i]
        i = i + 1
        count = count + 1
    }
   console.log(count-1)
  
     
   
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