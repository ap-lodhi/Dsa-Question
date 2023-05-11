// var x =10 ;
// function outer(){
//     var x =5
//     function inner(){
//         console.log(x)
//     }
//     return inner;
// }
// var foo= outer()
// // foo()


// for(let x=0; x<3; x++){
//     setTimeout(function(){
//         console.log(x)
//     },1000)
// }


// function outer(){
//     var x = 5;
//     return function(){
//         console.log(x)
//         x++
//     }
// }
// var closerFUn = outer();
// closerFUn();
// closerFUn();


// function outer(x){
//     // var x = 5;
//     return function(y){
//        return x+y ;
//     }
// }
// var closerFUn1 = outer(3);
// var closerFUn2 = outer(5);
// console.log(closerFUn1(2));
// console.log(closerFUn2(2));
// // closerFUn();
// // closerFUn();



function outer(){
    var x = 1;
    return function inner(y){
     console.log(x+y)
       x++;
    }
}
var closerFUn = outer();

closerFUn(2);
closerFUn(3);