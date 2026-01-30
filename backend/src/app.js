import express from "express"
import cors from 'cors'

import bookRoutes from "./routes/bookRoutes.js"
import authorRoutes from "./routes/authorRoutes.js"
import bookAuthorRoutes from "./routes/bookAuthorRoutes.js"
import bookCategoryRoutes from "./routes/bookCategoryRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import imageRoutes from "./routes/imageRoutes.js"
import authRoutes from "./routes/authRoutes.js"

import errorHandler from "./middlewares/errorHandler.js"

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))

app.use(express.json())

app.use("/books", bookRoutes)

app.use("/books", bookAuthorRoutes)

app.use("/books", bookCategoryRoutes)

app.use("/books", imageRoutes)

app.use("/authors", authorRoutes)

app.use("/categories", categoryRoutes)

app.use("/auth", authRoutes)

app.get("/health", (req, res) => {res.json({status: "ok"})})

app.use("/uploads", express.static("uploads"))

app.use(errorHandler)

export default app