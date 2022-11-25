// Rotate Linked List Ended
// Description

// Given a linked list, rotate the list to the right by k places, where k isnon-negative.

// Complete the function, and return the head of the updated list


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (n)

// Next n lines contains the nodes of the linked list

// Next line contains k

// n <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 3
// 2
// Sample Output 1

// 2 3 1
// Language: 




const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    while(k--){
        var prev = null;
        var curr = head;
        while(curr.next !== null){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        curr.next = head;
        head = curr;
    }
    return head;
};
  
