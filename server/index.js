import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on Port ${process.env.PORT}`);
    
})



