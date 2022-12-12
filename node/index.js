// const http= require("http")
// const server = http.createServer((req,res)=>{
//  //all the request will be handled here 
//  res.end('hello anil ')
// })

// server.listen(3000)//  

// const  x  =require('fs')
// console.log(x)


// 1. js Expression 
// 2. we can use  variable  
// 3. use (-) to get the  last result  
// 4. we can use editor  mode using  (.editor)



const  fs = require('fs')
const { buffer } = require('stream/consumers')



// crrating new file 
// fs.writeFileSync('reas.txt',"welcome to node js series")


// update new  
// fs.writeFileSync('reas.txt',"with thapa ")

// updating data 
// fs.appendFileSync('reas.txt',"hii .....")

//  const  buf_data= fs.readFileSync('reas.txt',)

//  org_data =buf_data.toString();
//  console.log(org_data)

 

//  /Node.js is include an additional data tyoe called Buffer 
// (not available in browser javascript )
// buffer is mainly  used to store binaty data
// while reading from a file or receving packets over the network 



fs.renameSync('reas.txt','read.txt')
