// Common Index of an Array Ended
// Description

// You are given two sorted arraysAandBof sizeNandM.
// You have to find the list of elements common in both the arrays
// The resultant list should also be sorted.
// Note: If there are not elements common in both the arrays, then print-1


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case, containsN, the number of elements in the arrayA

// The second line of each test case containsNspace separated integers denoting the elements of the arrayA

// The next line containsM, the number of elements in the arrayB.

// The next line containsMspace separated integers denoting the elements of the arrayB.

// Constraints

// 1 <= T <= 10

// 1 <=N, M<= 10^7

// 1 <=A[i], B[i]<= 10^7


// Output
// For each test case, print the number of elements common in both the arrays on a single line, in ascending order,-1if no elements are common between the two arrays, on a new line.


// Sample Input 1 

// 2
// 6
// 1 2 3 4 5 6
// 3
// 3 3 5
// 4 
// 1 2 3 4
// 4 
// 5 6 7 8
// Sample Output 1

// 3 5
// -1
// Hint

// In the first test case, the number of elements common in the two arrays are3, 5, which is the required output.

// In the second test case, there are no common elements between the two arrays, therefore, the output is-1; 

function common(n1,arr1,n2,arr2){
    

    var ans = "";
       var left =0;
       var right =0;
       var flag = 0;
       while(left<arr1.length && right<arr2.length){
           if(arr1[left] == arr2[right]){
               ans += arr1[left] +" ";
               left++
               right++
               flag++;
           }
           else if(arr1[left] <arr2[right]){
               left++
           }
          
           else{
               right++
           }
       }
       if(flag >0){
           return ans;
       }
       else{
           return -1;
       }
   }
   function runProgram(input) {
       input = input.split("\n");
      var test = +input[0];
      var line = 1;
      for(var i=0; i<test; i++){
        var n1 = +input[line]  
        line++;
       var arr1 = input[line].split(" ").map(Number);
       line++ ;
       var n2 = +input[line] ;
       line++;
       var arr2 = input[line].trim().split(" ").map(Number);
       line++;
       // console.log("n1->",n1)
       // console.log("n2->",n2)
       // console.log("A1->",arr1)
      var res  =common(n1,arr1,n2,arr2)
     console.log(res)
     
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
   
   