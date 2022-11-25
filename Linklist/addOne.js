// Add 1 to Linked List Ended
// Description

// A number is given represented in the form of a linked list. Add one to it.


// Input
// This is a function complete problem. You don't have to take the input just complete the function given.

// The sample test case is given only for your understanding.


// Output
// Return head of linked list which is the new number after incrementing one.


// Sample Input 1 

// 4
// 2 3 1 3
// Sample Output 1

// 2314
// Hint

// In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    var current = head 

    var previous = null
   var  next = null
    while(current != null){
        next = current.next
        current.next = previous 
        previous = current
        current = next 
    }
    head = previous
      var res = head 
     
    var temp
    var carry = 1, sum; 
    while (head != null) {
        sum = carry + head.data; 
        if(sum >= 10){
            carry =1
        }
        else{
            carry =0
        }
        sum = sum % 10; 
        head.data = sum; 
        temp = head; 
        head = head.next; 
    } 
 
    if (carry > 0) 
        temp.next = new LinkedListNode(carry); 
 
     var current = res

    var previous = null
   var  next = null
    while(current != null){
        next = current.next
        current.next = previous 
        previous = current
        current = next 
    }
    return previous
     
};