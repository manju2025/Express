//importing express
const bodyParser = require("body-parser");
const express=require("express")
const { getConnection }=require("./db")
const { v4: uuidv4 } = require('uuid');
//init app from express function
const app=express()
//manju
//body parser middleware
app.use(bodyParser.json())
const jwt=require("jsonwebtoken")
//1234
//init the port
const PORT=3001;
//connection to db
let DB=getConnection()
//register middleware
app.use((req,res,next)=>
{
    console.log("middleware exe---");
    next();
})
//register route for home page
app.get("/123",(req,res)=>
{
    res.send("hello123");
})
app.get("/express",(req,res)=>
{
    res.send('express');
})
app.get("/areaofCircle",(req,res)=>
{   
    let pi=3.141;
    function findarea(r)
    {
        return (pi*r*r)
    }
    let r,area;
    r=10;
    area=findarea(r)
    res.send({"Area":area});
    console.log(body.Area)
    
})
// INIT ROOT PATHnode 
app.get("/",(req,res)=>
{           
    res.send("hello");
})

app.get("/user/:id",(req,res)=>
{
   let id=req.params;
   let arr=[
    {
"id":1,
"name":"manju"
    },
    {
        "id":2,
        "name":"sanju"
    },
    {
        "id":3,
        "name":"bindhu"
    },
   ] 
   let result=arr.filter((ele)=>ele.id==id.id) 
   res.send(result)
})
//creating post
// app.post("/registration",async (req,res)=>
// {
//     try{
//         let body=req.body
    
//     console.log("Body>",req.body)
//    let id=Math.floor((Math.random() * 10000) + 1);
//     await DB.query(`INSERT INTO "user" ("name","email","phoneno","password","dob","id") VALUES ($1,$2,$3,$4,$5,$6)`,
//     [body.name,body.email,body.phoneno,body.password,body.dob,id]);
//     return true
//     }catch(e)
//     {
//         console.log("err<",e)
//     }
// })
app.post("/Employesss",async (req,res)=>
{
    try{
        let body=req.body
    
    console.log("Body>",req.body)
   let empId=Math.floor((Math.random() * 10000) + 1);
    await DB.query(`INSERT INTO "Employees" ("empname","empPhno","emppass","empadress","empId") VALUES ($1,$2,$3,$4,$5)`,
    [body.empname,body.empPhno,body.emppass,body.empadress,empId]);
    return true
    }catch(e)
    {
        console.log("err<",e)
    }
})
app.post("/login",(req,res)=>
{
    let body=req.body
    let token=jwt.sign({data:body},"secret",{expiresIn: 90*180})
    // console.log("token",token)
res.send({"token":token})
})
//listen to the port
app.listen(PORT,()=>
{
console.log("server is running ",PORT);
})
