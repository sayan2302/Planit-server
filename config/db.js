import mongoose from "mongoose"
import dotenv from 'dotenv'


dotenv.config()

const mongoUri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB: ", error.errorResponse.errmsg)
    }
}

export default connectDB