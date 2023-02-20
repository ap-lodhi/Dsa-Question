// a mechnaism in which javascript maintaines scope of
//  some  variables in closure scope, if the particular variables goes out of  scope //

// js 2 pass engine , lexical scope. It matters more on where your functions are declared

// function along with its lexical scope bundeld togethe.


/*/**A closure is the  combination of  function bundled together with refrence  to its surrounding stte 
(lexical envoirment )in other words a closure gives you acceses to encounter function scope from an
inner function  */


// function outer(){
//     var a = 10;
//     return function inner(b){
//         return a+b;
//     }
// }
// var ans  = outer()

// console.log(ans(12))

// closure 
// currying


// function outer(a){
   
//     return function inner(b){
//         return a+b;
//     }
// }
// console.log(outer(5)(20))




// function calculator(intiValue =0){
//     var value = intiValue;

//     function add(val){
//         value =value +val
//     }
//     return {add}
// }
// var calc = calculator()
// console.log(calc.add(10))

// memoization 
// debouncing 
// throtling 


// var arr = [1,2,3,4,5]

// for(let i=0; i<arr.length; i++){
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// console.log('value of i after for loop',i)

// expected
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

// value is 
// undefined 5 -> 5 times -> 1 sec intervals



  
// for(var i=0; i<arr.length; i++){
//   setTimeout(function(i){
//    	return function(){
//       console.log(arr[i],i)
//     } 
//   }(i),i*1000)
// }


// function display(i){
//     setTimeout(()=>console.log(this[i],i),i*1000)
// }

// for(var i=0; i<arr.length; i++){
// //     display.call(arr,i)
// // }
// for (var i = 0; i < 3; i++) {

//     setTimeout(function() { alert(i); }, 1000 + i);
  
//   }
(function() {

    var a = b = 5;
  
  })();
  console.log(b)
  var  _name = 5
  console.log(_name)
  var x = 4 + "4";

console.log(x);