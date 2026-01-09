import { attachCategory, detachCategory, listCategoriesByBookService } from "../services/bookCategoryService.js";

export async function getCategoriesFromBook(req, res, next) {
    try {
        const result = await listCategoriesByBookService(req.params.bookId)
        res.json(result)
    } catch (err) {
        next(err)
    }
}

export async function postBookCategory(req, res, next) {
    try {
        await attachCategory(req.params.bookId, req.params.categoryId)
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}

export async function deleteBookCategory(req, res, next) {
    try {
        detachCategory(req.params.bookId, req.params.categoryId)
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}