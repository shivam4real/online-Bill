const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT || 5000
const mongoURL = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@${process.env.mongoDB}.5rnnpk0.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoURL , (err) =>{
    if (err){
        console.log('Not able to connect '+err);
    }
    else{
        console.log('Connected to Database');
    }
})

// middleware
app.use(cors())
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Hello World !!')
// })

app.listen(port , ()=>{
    console.log(`Server Listening on port ${port}`)
})