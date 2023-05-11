// Declare a tuple type
let x: [string, number];

// Initialize it

x = ["hello", 10]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error

// OK
console.log(x[0].substring(1));

// console.log(x[1].substring(1));
// Property 'substring' does not exist on type 'number'.

// Accessing an element outside the set of known indices fails with an error:

// x[3] = "world";
//! Tuple type '[string, number]' of length '2' has no element at index '3'.

// console.log(x[5].toString());
//! Object is possibly 'undefined'.
//! Tuple type '[string, number]' of length '2' has no element at index '5'.


