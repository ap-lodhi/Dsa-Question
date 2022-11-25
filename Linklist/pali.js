// Palindrome List Ended
// Description

// Given a singly linked list, determine if it is a palindrome.
// No need to take any input, You'll be given the pointer to the head of the linked list,Complete the function belowand return true if it's a palindrome and false if otherwise.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (n)

// Next n lines contains the nodes of the linked list.

// n <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 1
// Sample Output 1

// truecc
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
     if(head == null || head.next == null){
        return true;
    }
    var current  = head;
    var len  = 0;
    while(current  !== null){
        current= current.next;
        len++;
    }
    var head1 = null;
    var c1 = head;
    while(len--){
        var node = new LinkedListNode(c1.data);
        if(head1 == null){
            head1 = node;
        }
        else{
            var curr = head1;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = node;
        }
        c1 = c1.next;
    }
    var prev = null;
    var curr = head;
    var next = head.next;
    while(curr !== null){
        curr.next = prev;
        prev = curr;
        curr = next;
        if(next !== null){
            next = next.next;
        }
    }
    var newHead = prev;
    while(newHead !== null){
        if(newHead.data !== head1.data){
            return false
        }
        newHead = newHead.next;
        head1 = head1.next;
    }
    return true;
};