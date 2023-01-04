const express=require("express")
const app=express()
//Our first middleware
app.use((req,res,next)=>{
console.log("Hello from Middleware")
next()
})
app.get("/",(req,res)=>{
console.log("Hello from the base route")
res.send("Welcome")
})
app.get("/contacts",(req,res)=>{
console.log("Hello from the contacts route")
res.send("Contacts")
})
app.get("/about",(req,res)=>{
console.log("Hello from the about route")
res.send("About")
})