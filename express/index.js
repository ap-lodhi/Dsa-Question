const { Console } = require('console');
const { json } = require('express');
const express  =require('express');
const fs = require('fs')

const app = express()
app.use(express.json())




app.get("/",(req,res)=>{
    res.send("hello ")
})

app.get("/allData",(req,res)=>{
    const  data = fs.readFileSync("./db.json","utf-8");
    const parse = JSON.parse(data)
   console.log(parse)
    res.send(parse)
})


app.post()


app.listen(3500,()=>{
    console.log('server is listening on port  3500')
})