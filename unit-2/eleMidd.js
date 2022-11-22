// Element in the middle Ended
// Description

// Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.

// Note: Left and right side elements can be equal to the required element. And extreme elements cannot be required element.


// Input
// Input Format

// The first line contains an integer n denoting the size of the array and the second line contains n space separated array elements.

// Constraints

// n <= 1000

// Ai <= 10000




// Output
// For each test case, in a new line print the required element. If no such element present in the array then print -1.


// Sample Input 1 

// 5
// 4 3 6 7 8
// Sample Output 1

// 6



function valueMax(arr, e){
    var max = 0;
    for(var i=0; i<e; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function valueMin(arr, s){
    var min = arr[s];
    for(var i=s; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}


function runProgram(input) {
 input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  for(var i=1; i<n-1; i++){
      if((valueMax(arr, i) <= arr[i]) && (arr[i] <= valueMin(arr, i+1))){
          console.log(arr[i]);
          return ;
      }
  }
  console.log(-1);
  return ;
  
}