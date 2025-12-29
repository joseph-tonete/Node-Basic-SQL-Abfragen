import { Router } from "express"
import { getBooks, postBook } from "../controllers/bookController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", getBooks)

router.post("/", authMiddleware, postBook)

export default router