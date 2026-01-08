import { findBookById, findAllBooks, insertNewBook, updateBookById, deleteBookById } from "../repositories/bookRepository.js"

export async function listBooks() {
    //business logic lives here
    //today it does nothing special
    //tomorrow it will

    const books = await findAllBooks()
    return books
}

export async function listBook(bookData){
    if (!bookData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    const book = await findBookById(bookData.id)

    if (!book) {
        const err = new Error("Book not found")
        err.statusCode = 404
        throw err
    }

    return book
}

export async function createBook(bookData){
    if (!bookData.isbn) {
        const err = new Error("ISBN is required");
        err.statusCode = 400;
        throw err;
    }

    if (!bookData.createdByAdminId) {
        const err = new Error("Admin user is required");
        err.statusCode = 400;
        throw err;
    }

    try {
        return await insertNewBook(bookData)
    } catch (err) {
        if (err.code === "23505") {
            // unique violation
            err.statusCode = 409
            err.message = "ISBN already exists"
        }

        if (err.code === "23503") {
            // foreign_key_violation
            err.statusCode = 400
            err.message = "Invalid admin user"
        }

        throw err
    }
}

export async function updateBook(bookData){
    if(!bookData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    try {
        return await updateBookById(bookData)
    } catch {
        throw err
    }
}

export async function deleteBook(bookData){
    if(!bookData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    const deletedCount = await deleteBookById(bookData.id)

    if (deletedCount === 0) {
        const err = new Error("Book not found")
        err.statusCode = 404
        throw err
    }

    return
}