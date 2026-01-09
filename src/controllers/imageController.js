import { createBookImage, listImagesPerBook } from "../services/imageService.js"

export async function getBookImages(req, res, next){
  try {
    const images = await listImagesPerBook(req.params.bookId)
    res.json(images)
  } catch (err) {
    next(err)
  }
}

export async function postBookImage(req, res, next) {
  try {
    const image = await createBookImage({
      bookId: req.params.bookId,
      filename: req.file.filename,
      path: req.file.path
    })

    res.status(201).json(image)
  } catch (err) {
    next(err)
  }
}