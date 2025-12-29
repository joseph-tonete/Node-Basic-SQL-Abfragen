import { findAllBooks, insertNewBook } from "../repositories/bookRepository.js"

export async function listBooks() {
    //business logic lives here
    //today it does nothing special
    //tomorrow it will

    const books = await findAllBooks()
    return books
}

export async function createBook(bookData){
    if (!bookData.isbn) {
        const err = new Error("ISBN is required");
        err.statusCode = 400;
        throw err;
    }

    if (!bookData.created_by_admin_id) {
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