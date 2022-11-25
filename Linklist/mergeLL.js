// Merge two Linked Lists Ended
// Description

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Complete the function below and return the head of the new linked list.


// Input
// This is a function complete problem

// To get a understanding of the input-

// The first line contains the number of nodes in the first linked list (n1)

// Next n1 lines contains the nodes of the first linked list

// Next line contains the number of nodes in the second linked list (n2)

// Next n2 lines contains the nodes of the second linked list

// n1, n2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 1
// 2
// 4
// 2
// 3
// 4
// 5
// Sample Output 1

// 1 1 2 2 3 4 5 

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    var c  = new ListNode(0)
    var current = c
    while(l1 !== null && l2 !== null){
        if(l1.val <l2.val){
            current.next = l1
            l1 =l1.next
        }
        else{
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
     if(l1 !== null){
        current.next =l1
    }
    else if(l2 !== null){
        current.next = l2
    }
    return c.next
};
