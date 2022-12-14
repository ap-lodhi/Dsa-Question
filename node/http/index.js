const http = require('http')

const server  = http.createServer((res,req)=>{
    res.end("hi,, i am anil ")

})


server.listen(3000, ()=>{
    console.log("listening  on 3000")
})