const express = require("express")
const app = express()
const mongoose = require("mongoose")  
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = 3001

const DB = ""

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})