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

app.get("/allStudents",(req,res)=>{
    const  data = fs.readFileSync("./db.json","utf-8");
    const parse = JSON.parse(data)
    console.log(parse.student)
    res.send(parse.student)
    
})


app.post("/addStudent",(req,res)=>{
    const  data = fs.readFileSync("./db.json","utf-8");
    const parse = JSON.parse(data)
    parse.student.push(req.body)
    console.log("data added successfully")
    res.send(parse)

})


app.listen(3500,()=>{
    console.log('server is listening on port  3500')
})