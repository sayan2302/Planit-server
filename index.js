import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

dotenv.config()
const app = express()


//Constants
const PORT = process.env.PORT || 8000


// Middlewares
app.use(express.json())
app.use(cors())


// Routes
app.get("/home", (req, res) => res.send("Hello from Home!"))
app.use("/auth", authRoutes)





// Start the Server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`);
    });
};

startServer();