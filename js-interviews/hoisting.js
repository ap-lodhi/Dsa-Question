var x  = 100 ;
 function test(){
    // assignment oprater right to left
   var   x = i= 10
 }
test()
 console.log(x,i) // 100 ,10



 let name  = 'masai '
 // blocked scoped ,redeclration ,hositing
 const lname = "school"
 function test1(){
    //hoisting takes place  and  creat  var  name  
    console.log(name)
    // var name ='banglore'
 }

 test1()