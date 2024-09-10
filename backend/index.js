import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import path from 'path';

const app=express()
// const server=http.createServer(app)

app.use(cors())


const PORT=7000;
const MONGO="mongodb+srv://archit:1234@cluster0.gb71m.mongodb.net/"
mongoose
    .connect(MONGO)
    .then(()=>{
        console.log("Database is connected")
    })

const __dirname = path.resolve();
app.listen(PORT,()=>{
         console.log(`Server is running on port ${PORT}`);
     });