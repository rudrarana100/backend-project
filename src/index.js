// require('dotenv').config({ path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: './env'})

connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
    })
    server.on("error", (error) => {
        console.log("ERROR", error)
        throw error
    })
})
.catch((err) =>{
    console.log("mongodb connection failed !!!",err);
    
})





// first approach, not bad but still not professional

/*
import express from "express";

const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRRROR", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port${process.env.PORT}`)
        })

    } catch(error){
        console.error("ERROR", error)
        throw error
    }
})() 
*/
