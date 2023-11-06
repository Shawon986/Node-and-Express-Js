const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())


//! API to check connection
app.get("/",(req,res)=>{
    res.json({message:"Welcome to express app"})
})




const port = 7009;
app.listen(port,()=>{
    console.log(`App is running on port ${port} `)
})
   


