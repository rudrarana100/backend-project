import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true

}))
const size = "16kb"
app.use(express.json({limit : size}))
app.use(express.urlencoded({extended: true, limit: size}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import

import userRouter from './routes/user.routes.js'

// routes declaration 

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register




export { app} 