import express from 'express'
import cors from 'cors'
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app= express();

app.use(express.json())

// Permitir solicitudes desde http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



// Inicio del servidor
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
})