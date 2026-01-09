import { listBook, listBooks, createBook, updateBook, deleteBook } from "../services/bookService.js";

export async function getBook(req, res, next){
  try {
    const book = await listBook({id: req.params.id})
    res.json(book)
  } catch (err) {
    next(err)
  }
}

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

export async function putBook(req, res, next) {
  try {
    const book = await updateBook({
      id: req.params.id,
      ...req.body
    });
    res.json(book);
  } catch (err) {
    next(err);
  }
}

export async function delBook(req, res, next) {
  try {
    await deleteBook({ id: req.params.id });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}