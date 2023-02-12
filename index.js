const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")


const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/categories',require("./routes/Categories"))


mongoose.connect('mongodb+srv://eltac:eltac123@firstdatabase.x73bvvl.mongodb.net/Jobfind')

app.listen(4000,()=>{
    console.log("Server working ...");
})