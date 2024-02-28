import express from 'express'
import authRoutes from "./routes/posts.js"
import userRoutes from "./routes/posts.js"
import postRoutes from "./routes/posts.js"

const app= express()

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



app.listen(8000,()=>(
    console.log("Connected!")
))
