// Implement Stack using Queue Ended
// Description

// Complete the function of push and pop and top for a stack, queue object names are Q1 and Q2.

// Expected Time complexity is O(N) for push and O(1) for pop and top.


// Input
// This is a function complete problem. You just have to complete the function. The input format given below is just for your understanding.

// The first line of the input contains Q, the number of queries to be executed.

// Each query X is of type X = 0, X = 1 or X = 2.

// Query X = 0 indicates, an element Y to be pushed into the stack.

// Query X = 2 indicates, an element to be popped off the stack.

// Query X = 1 indicates, an element to be peeked from the stack.


// Output
// For each query of type X = 1, print the value at the front of the queue.


// Sample Input 1 

// 6
// 0 1
// 0 2
// 0 3
// 1 
// 2
// 1
// Sample Output 1

// 3
// 2
// Language: 
  
// Theme: 
// Font Size: 20

/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
        this.q=[];
    }
    push(value) {
    	//write your code here..
    this.q[this.q.length]=value;
    }
    pop() {
    	//write your code here..
    	if(this.q.length ==0){
    	    return 0;
    	}
    	return this.q.length =this.q.length-1
    }
    top() {
        //write your code here..
           return this.q[this.q.length-1]
        //console.log(ans)
    }
    isEmpty() {
    	//write your code here..
    	if(this.Q2.length >0){
    	    return true
    	}else{
    	    false
    	}
    }
   
}



