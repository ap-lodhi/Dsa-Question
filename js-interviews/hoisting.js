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



    var person ={
        name:"masi",
        display:()=>console.log(this.name),
        displayEs5:function(){console.log(this.name)}
    }
// es6
    person.display()
// es5
    person.displayEs5()



    //call bind apply 

    class App extends ReadableByteStreamController.Componet{
        constructor(props){
            super(props)
            this.stat ={
                data:[1,2,3]
            }
            this.handleClick =this.handleClick.bind(this)
        }
        handleClick=()=>{
            console.log(this.state.data)
        }
    }






    