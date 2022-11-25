// Next Greater Element Ended
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding


// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 10000


// Output
// For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.


// Sample Input 1 

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1
// Hint

// In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1


function runProgram(input) {
    input = input.split("\n");
   var  t= +input[0];
  var  line =1;
   for(var i=0; i<t; i++){
      var n = +input[line];
      line++;
      var arr = input[line].split(" ").map(Number);
      line++
      var stack = [];
    var ans = [];
    stack.push(arr[arr.length - 1]);
    ans.push(-1);
    for (var j = arr.length - 2; j >= 0; j--) {
      while (stack.length !== 0 && stack[stack.length - 1] <= arr[j]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
        stack.push(arr[j]);
      }
      else {
        ans.push(stack[stack.length - 1])
        stack.push(arr[j]);
      }
    }

    ans.reverse();
    console.log(ans.join(" "));
     
  }

}