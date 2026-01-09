import { insertBookImage, getNextSortOrder, listImagesByBookId} from "../repositories/imageRepository.js"
import { listBook } from "./bookService.js"

export async function listImagesPerBook(bookId){
    if(!bookId){
        const err = new Error("BookId is required")
        err.statusCode = 400
        throw err
    }
    return await listImagesByBookId(bookId)
}


export async function createBookImage({ bookId, filename, path }) {
  if (!bookId || !filename) {
    const err = new Error("Invalid image upload")
    err.statusCode = 400
    throw err
  }

  await listBook({id: bookId}) //!!!!!!!!!!!!!!!!!!!!!!!!!

  const sortOrder = await getNextSortOrder(bookId)

  return await insertBookImage({
    bookId,
    fileCode: `/uploads/books/${bookId}/${filename}`,
    sortOrder
  })
}