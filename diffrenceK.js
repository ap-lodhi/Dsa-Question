// Difference of K Ended
// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// -10^9 <=A[i]<= 10^9

// 0 <= K <= 10^9


// Output
// For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No
// Hint

// In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

// In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.


function target_sum(n,target,arr){
    var left =0;
    var right =left+1;
    var sum =0;
    while(left <arr.length && right <arr.length){
        sum = arr[right] -arr[left]
        if(sum ==target){
            return "Yes";
           
        }
        else if(sum >target){
      
             left++
        }
        else{
                 right++
        }
         
    }
    return "No";
  }
  
  function runProgram(input) {
   
      input = input.split("\n");
     var test = +input[0];
     var line = 1;
     for(var i=0; i<test; i++){
    var [n,target] = input[line].split(" ").map(Number);
     line++ ;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    
        var ans = target_sum(n,target,arr)
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