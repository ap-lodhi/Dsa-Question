var arr = [1,2,3]

for(var i=0; i<arr.length; i++){
    setTimeout(function(){
        console.log(i,arr[i])
    },i*1000)
}

const fun2  =()=>{
    setTimeout(()=>{
        console.log("fun2 is stating")//3
    },3000)
}

const fun1  =()=>{
  
        console.log("fun1 is stating") //1
        fun2();
        console.log('fun1 is ending')//2
   
}
fun1()