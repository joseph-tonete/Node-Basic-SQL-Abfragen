import { Router } from "express"
import { getBooks, postBook } from "../controllers/bookController.js"

const router = Router()

router.get("/", getBooks)

router.post("/", postBook)

export default router