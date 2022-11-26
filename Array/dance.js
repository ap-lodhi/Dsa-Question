// Dance Night! Ended
// Description

// Masai School will be hosting its Prom Night on 29th Feb.There would be M boys and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than him. A girl can dance with only one boy and vice-versa.

// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.


// Input
// The first line contains T denoting the number of test cases.

// Each test case contains three lines.

// The first line contains M and N.

// The second line contains M integers each denoting the height of boy.

// The third contains N integers each denoting the height of girl.

// Constraints

// 1<=T<=10

// 1<=N, M<=10000

// 1<=Height<=200


// Output
// Print YES if it is possible for each boy to get a girl else print NO.


// Sample Input 1 

// 1
// 4 5
// 2 5 6 8
// 3 8 5 1 7
// Sample Output 1

// YES
function possible(arr1,arr2){
    arr1.sort(function(a,b){
        return a-b;
    })
     arr2.sort(function(a,b){
        return a-b;
    })
    var i = 0;
    var  j =0
    while(i <arr1.length &&  j<arr2.length ){
        if(arr1[i] <= arr2[i]){
            return "NO";
        }
        i++;
        j++;
    }
    return "YES";
}
function runProgram(input) {
    input = input.split("\n");
   var t= +input[0]
   var line = 1;
   for(var i=0; i<t; i++){
       var [m,n]  = input[line].split(" ").map(Number);
       line++;
       var boy  = input[line].split(" ").map(Number);
       line++;
       var girl=input[line].split(" ").map(Number);
       line++;
       var ans  = possible(boy,girl);
   console.log(ans)
//   if(ans){
//       console.log("YES");
//   }else{
//       console.log("NO")
//   }
  
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