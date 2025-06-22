import express from 'express'
import connectDB from './database/db.js'
import userRoutes from './routes/user.js'
import cors from 'cors'
import courseRoutes from "./routes/course.js"

const app = express()

app.use(cors());

app.use(express.json())

connectDB()

app.use("/",userRoutes)

app.use("/course", courseRoutes)

app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.listen(8000)