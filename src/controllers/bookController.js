import { listBooks, createBook } from "../services/bookService.js";

export async function getBooks(req, res, next) {
    try {
        const books = await listBooks()
        res.json(books)
    } catch (err) {
        next(err)
    }
}

export async function postBook(req, res, next) {
  try {
    const book = await createBook({
      ...req.body,
      createdByAdminId: req.admin.id
    });

    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
}