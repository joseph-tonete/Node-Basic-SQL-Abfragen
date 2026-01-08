import { addAuthorToBook, removeAuthorFromBook, listAuthorsByBook } from "../repositories/bookAuthorRepository.js";
import { listBook } from "./bookService.js";
import { listAuthor } from "./authorService.js" 


export async function attachAuthor(bookId, authorId){
    if(!bookId || !authorId){
        const err = new Error("BookId and Author ID are required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})
    await listAuthor({id: authorId})

    try {
        await addAuthorToBook(bookId, authorId)
    } catch (err) {
        if (err.code === "23505"){
            err.statusCode = 409
            err.message = "Author already linked to book"
        }

        throw err
    }
}

export async function detachAuthor(bookId, authorId) {
    if (!bookId || !authorId) {
        const err = new Error("BookId and AuthorId are required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})
    await listAuthor({id: authorId})

    const removed = await removeAuthorFromBook(bookId, authorId)

    if (!removed) {
        const err = new Error("Author is not linked to this book")
        err.statusCode = 404
        throw err
    }
}

export async function listAuthorsByBookService(bookId) {
    if (!bookId) {
        const err = new Error("BookId is required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})

    return await listAuthorsByBook(bookId)
}
