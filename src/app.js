import express from "express"
import bookRoutes from "./routes/bookRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

app.use(express.json())

app.use("/books", bookRoutes)

app.get("/health", (req, res) => {
    res.json({status: "ok"})
})

app.use(errorHandler)

export default app