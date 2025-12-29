import { findAllBooks } from "../repositories/bookRepository.js"

export async function listBooks() {
    //business logic lives here
    //today it does nothing special
    //tomorrow it will

    const books = await findAllBooks()
    return books
}