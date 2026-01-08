import { Router } from "express"
import { getAuthorsFromBook, postBookAuthor, deleteBookAuthor } from "../controllers/bookAuthorController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/:bookId/authors", getAuthorsFromBook)

router.post("/:bookId/authors/:authorId", authMiddleware, postBookAuthor)

router.delete("/:bookId/authors/:authorId", authMiddleware, deleteBookAuthor)

export default router