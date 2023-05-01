

// undefined 

console.log(undefined==null)  // true
console.log(undefined===null)  // false



//NAN


// NaN (Not a Number) is a numeric data type that means an undefined value or value that cannot be represented
//  especially results of floating-point calculations.
console.log(NaN ==NaN)  // false
console.log(NaN ===NaN) // false



// Array

// Object has  diffrent  address as such si it will not  be  equal 


console.log(  "arayy ",[]==[])  // false 
console.log(  "arayy ",[]===[])  // false 
console.log("obj",{}=={}) //false 
console.log("obj",{}==={})//false  it  may be contain same  data  point  
 
// console.log("2" + 2 - "1");


// var x = 1;
// if (function f(){}) {
//   x += typeof f;
// }
// console.log(x);





console.log(1 + "2" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);



// var x = [typeof x, typeof y][1];
// console.log(typeof typeof x);


var b = 1;
function outer(){
 	var b = 2
  	function inner(){
          b++;
          var b = 3;
      	console.log(b)
    }
  	inner();
}
outer();



var a = [1, 2, 3];
a[10] = 4;
console.log(a.length);
console.log(a);


console.log(typeof null);

console.log(typeof typeof 1);  // if we write two times  it will become string if we check one time type of it will give  Number 
console.log("2" * "3");console.log("12" / "6");
console.log("number" - 15);
console.log("foo" + + "bar");
console.log('true' == true);
console.log(false == 'false');




