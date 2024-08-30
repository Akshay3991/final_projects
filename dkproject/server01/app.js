import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/err.js";
import cors from 'cors'
export const app = express();
config({
    path: "./data/config.env"
})
// using middlewares
app.use(express.json());
app.use(cookieParser())
// app.use(cors())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))
// using Routers
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)

app.get("/", (req, res) => {
    res.send("Nice Working")
});
// Using error middlewares
app.use(errorMiddleware)



