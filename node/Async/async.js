const fs =require('fs')


//this the synchronous way of reading file  in that  method  it  give the result  whatever first call after second  will we excute 
const  data =fs.readFileSync("read.txt", "utf-8");
console.log(data)  //first print  

console.log("after the  data")//second print

fs.readFile("read.txt", "utf-8", (err,data)=>{
    console.log(data) // second print 


})

console.log("after the  data")  // first print 