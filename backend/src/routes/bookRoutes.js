import { Router } from "express"
import { getBook, getBooks, postBook, putBook, delBook } from "../controllers/bookController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", getBooks)

router.get("/:id", getBook)

router.post("/", authMiddleware, postBook)

router.put("/:id", authMiddleware, putBook)

router.delete("/:id", authMiddleware, delBook)

export default router