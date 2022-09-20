const express = require("express")
const app = express()
const mongoose = require("mongoose")  
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = 3001

const DB = "mongodb+srv://SmileySmacks:student1@cluster0.6x6zg5x.mongodb.net/Bookstore?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("Database Connected")
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})