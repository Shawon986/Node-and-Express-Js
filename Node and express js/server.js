const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())





const port = 7009;
app.listen(port,()=>{
    console.log("App is running on port 7009")
})



