import { listBooks } from "../services/bookService.js";

export async function getBooks(req, res, next) {
    try {
        const books = await listBooks()
        res.json(books)
    } catch (err) {
        next(err)
    }
}