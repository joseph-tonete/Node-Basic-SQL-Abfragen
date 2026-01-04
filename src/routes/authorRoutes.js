import { Router } from "express"
import { getAuthors, postAuthor, putAuthor, delAuthor } from "../controllers/authorController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", getAuthors)

router.post("/", authMiddleware, postAuthor)

router.put("/:id", authMiddleware, putAuthor)

router.delete("/:id", authMiddleware, delAuthor)

export default router