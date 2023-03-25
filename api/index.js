import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postsRoutes from "./routes/posts.js"
import commentsRoutes from "./routes/comments.js"
import upvoteRoutes from "./routes/upvotes.js"
import cookieParser from "cookie-parser";
import cors from 'cors'


const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use(express.json ())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/posts", postsRoutes)
app.use("/api/upvote", upvoteRoutes)





app.listen(3000, ()=> {
    console.log('api')
});