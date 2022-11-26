// A to B Ended
// Description

// You are given two number A and B, and you have to make A equal to B, but you are only allowed to add either 2, or 1 to A. Find the minimum number of moves, in which you can convert A to B.

// Note:  B will always be greater than or equal to  A, initially.


// Input
// The first line of the input contains T, the number of test cases.

// The first and the only line of each test case contains the value of A and B.

// Constraints

// 1 <= T <= 10

// 1 <= A <= B <= 100


// Output
// For each test case, print the minimum number of moves in which you can convert A to B, on a new line.


// Sample Input 1 

// 2
// 5 10
// 6 10
// Sample Output 1

// 3
// 2
// Hint

// In the first test case, the value of A = 5 and that of B = 10. A can be converted to B, in 3 steps by adding 2 for the first two moves, and then adding 1.

// In the second test case, the value of A = 6, and that of B = 10. A can be converted to B in 2 steps by adding 2 for the next two moves.
function aToB(A,B){
    var rem = B-A;
    var no = Math.floor(rem /2);
    if(rem% 2  ==0 ){
        console.log(no)
    }
    else{
        console.log(no+1)
    }
    
  
    
   
}