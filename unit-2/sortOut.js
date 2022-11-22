// Sort out! Ended
// Description

// Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// You can only write your own sorting algorithm must not use builtin functionality of sort()


// Input
// Input Format

// The first line of input consists of the size of the array

// The next line consists of the array of size m

// Constraints

// 1<=m<=10000

// 0<=A[i]<=1000




// Output
// Output Format

// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

function runProgram(input) {
    input = input.split("\n");
    var  n =+input[0];
    var arr = input[1].split(" ").map(Number);
    var index= [];
    for(var k=0; k<n; k++){
        index.push(k)
    }
    for(var i=0; i<n-1; i++){
        for(var j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
                var temp1 =index[j];
                index[j]=index[j+1];
                index[j+1] =temp1;
            }
        }
    }
        console.log(index.join(" "))
    
   
   }