const fs = require('fs')


fs.writeFile('read.txt', "today is awesome day ", (err)=>{
    console.log(('file is created'))
    console.log(err)
})



//we pass them a function as an argument - a callback
// This callback has an argument  that  tells  you wether  
// Now  we need to say waht to do when  fs.writeFile
// has (completed (even if it isnothing ,and start )
// Checking for errors

fs.appendFile('read.txt', "what a day ", (err)=>{
    console.log("task updated")
})



fs.readFile('read.txt','utf8',(err,data)=>{
    console.log(data)
})