import express from "express"
import bookRoutes from "./routes/bookRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

app.use(express.json())

app.use("/books", bookRoutes)

app.use("/auth", authRoutes)

app.get("/health", (req, res) => {
    res.json({status: "ok"})
})

app.use(errorHandler)

export default app