const http = require('http')

const server  = http.createServer((res,req)=>{
    // if(req.url == "/"){

        res.end("hi from home  page   ")
    // }else if(req.url == "/about"){
    //    res.end("hii from about side ")
    // }else if(req.url == "/contact"){
        // res.end("hii my contact 9100001500")
    // }

})


server.listen(3000,)