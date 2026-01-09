import { Router } from "express"
import { postBookImage, getBookImages } from "../controllers/imageController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import{ uploadBookImage } from "../middlewares/multerMiddleware.js"

const router = Router()

router.get("/:bookId/images", getBookImages)

router.post(
    "/:bookId/images",
    authMiddleware,
    uploadBookImage.single("image"),
    postBookImage
)

export default router