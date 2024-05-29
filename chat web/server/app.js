import express from "express";
import { Server } from "socket.io";
import { createServer } from 'http'
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import cors from "cors"

const port = 3000;
const secretKeyjwt = "oiforjffjfsaoijeiffj"
const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
})
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}))
app.get("/", (req, res) => {
    res.send("hello World")
})
app.get("/login", (req, res) => {
    const token = jwt.sign({ _id: "dufujuffubfijfhhhdf" }, secretKeyjwt)
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" })
        .json({
            message: "Login success",
        })
})
io.use((socket, next) => {
    cookieParser()(socket.request, socket.request.res, (err) => {
        if (err) return next(err)
        const token = socket.request.cookies.token;
        if (!token) return next(new Error("Authentication Error"))
        const decoded = jwt.verify(token, secretKeyjwt)
        next()
    })
})
io.on("connection", (socket) => {
    console.log('User connected', socket.id);
    socket.on("message", ({ room, message }) => {
        // console.log({ message, room })
        socket.to(room).emit("receive-message", message)
    });
    socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`User joined ${room}`)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected :", socket.id)
    });
})

server.listen(port, () => {
    console.log(`server is running on port ${port} `)
})
