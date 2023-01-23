// a mechnaism in which javascript maintaines scope of
//  some  variables in closure scope, if the particular variables goes out of  scope //

// js 2 pass engine , lexical scope. It matters more on where your functions are declared

// function along with its lexical scope bundeld togethe.


/*/**A closure is the  combination of  function bundled tigether with refrence  to its surrounding stte 
(lexical envoirment )in other words a closure gives you acceses to encounter function scope from an
inner function  */


function outer(){
    var a = 10;
    return function inner(b){
        return a+b;
    }
}
var ans  = outer()

console.log(ans(12))