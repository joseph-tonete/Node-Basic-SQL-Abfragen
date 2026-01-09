import multer from "multer"
import path from "path"
import fs from "fs"

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const bookId = req.params.bookId
    const dir = `uploads/books/${bookId}`

    fs.mkdirSync(dir, { recursive: true })
    cb(null, dir)
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`)
  }
})

export const uploadBookImage = multer({ storage })
