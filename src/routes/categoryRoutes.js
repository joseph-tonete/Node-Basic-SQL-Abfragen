import { Router } from "express"
import { getCategories, postCategory, putCategory, delCategory } from "../controllers/categoryController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", getCategories)

router.post("/", authMiddleware, postCategory)

router.put("/:id", authMiddleware, putCategory)

router.delete("/:id", authMiddleware, delCategory)

export default router