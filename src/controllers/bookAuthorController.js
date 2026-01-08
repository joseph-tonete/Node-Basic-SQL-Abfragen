import { attachAuthor, detachAuthor, listAuthorsByBookService } from "../services/bookAuthorService.js"

export async function getAuthorsFromBook(req, res, next){
    try {
        const result = await listAuthorsByBookService(req.params.bookId)
        res.json(result)
    } catch (err) {
        next(err)
    }
}

export async function postBookAuthor(req, res, next){
    try {
        await attachAuthor(req.params.bookId, req.params.authorId)
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}

export async function deleteBookAuthor(req, res, next){
    try {
        detachAuthor(req.params.bookId, req.params.authorId)
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}