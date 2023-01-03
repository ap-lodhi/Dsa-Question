const { application } = require('express')
const express  =require('express')

const app = express()
app.use(express.json())




app.get("/",(req,res)=>{
    res.send("hello ")
})


app.listen(3500,()=>{
    console.log('server is listening on port  3500')
})