import { addCategoryToBook, removeCategoryFromBook, listCategoriesByBook } from "../repositories/bookCategoryRepository.js";
import { listBook } from "./bookService.js"
import { listCategories } from "./categoryService.js";

export async function attachCategory(bookId, categoryId){
    if(!bookId || !categoryId){
        const err = new Error("BookId and CategoryId are required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})
    await listCategories({id: categoryId})

    try {
        await addCategoryToBook(bookId, categoryId)
    } catch (err) {
        if (err.code == "23505"){
            err.statusCode = 409
            err.message = "Category already linked to book"
        }

        throw err
    }
}

export async function detachCategory(bookId, categoryId){
    if(!bookId || !categoryId){
        const err = new Error("BookId and CategoryId are required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})
    await listCategories({id: categoryId})

    const removed = await removeCategoryFromBook(bookId, categoryId)

    if(!removed){
        const err = new Error("Category is not linked to this book")
        err.statusCode = 404
        throw err
    }
}

export async function listCategoriesByBookService(bookId){
    if(!bookId){
        const err = new Error("BookId is required")
        err.statusCode = 400
        throw err
    }

    await listBook({id: bookId})

    return await listCategoriesByBook(bookId)
}