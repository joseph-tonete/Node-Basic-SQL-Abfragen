import { Router } from "express"
import { getCategoriesFromBook, postBookCategory, deleteBookCategory } from "../controllers/bookCategoryController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/:bookId/categories", getCategoriesFromBook)

router.post("/:bookId/categories/:categoryId", authMiddleware, postBookCategory)

router.delete("/:bookId/categories/:categoryId", authMiddleware, deleteBookCategory)

export default router