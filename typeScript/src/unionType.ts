let type: "superadmin" | "admin" | "user";

// type can only take in superadmin, admin or user

type = "admin";
//! Error, Expected either superadmin, admin or user




// ## Optional and default params in functions

// In TypeScript, every parameter is assumed to be required by the function.
//  This doesn’t mean that it can’t be given null or undefined, but rather, when the function is called, 
//  the compiler will check that the user has provided a value for each parameter.
//   The compiler also assumes that these parameters are the only parameters that will be passed to the function. 
//   In short, the number of arguments given to a function has to match the number of parameters the function expects.

function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

// let result1 = buildName("Bob"); // error, too few parameters
//! Expected 2 arguments, but got 1.
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//! Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right

// to provide optional parameters
// function buildName(firstName: string, lastName?: string) {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
// }

// let result1 = buildName("Bob"); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
// //! Expected 1-2 arguments, but got 3.
// let result3 = buildName("Bob", "Adams"); // ah, just right
