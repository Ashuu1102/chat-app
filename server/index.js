import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.route.js"
import messageRoutes from "./routes/messageRoute.route.js"
import { Server } from "socket.io"

dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", userRoutes)
app.use("/api/messages", messageRoutes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on Port ${process.env.PORT}`);
    
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
})

globalThis.onlineUsers = new Map()

io.on("connection", (socket) => {
    globalThis.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id)
    })
    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to)
        if(sendUserSocket){
            socket.to(sendUserSocket) {
                socket.to(sendUserSocket).emit("msg-recieve", data.msg)
            }
        }
    })
})


