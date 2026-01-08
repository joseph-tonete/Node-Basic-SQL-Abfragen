import { listAuthor, listAuthors, createAuthor, updateAuthor, deleteAuthor } from "../services/authorService.js";

export async function getAuthor(req, res, next){
    try {
        const author = await listAuthor({id: req.params.id})
        res.json(author)
    } catch (err) {
        next(err)
    }
}

export async function getAuthors(req, res, next){
    try {
        const authors = await listAuthors()
        res.json(authors)
    } catch (err) {
        next(err)
    }
}

export async function postAuthor(req, res, next){
    try {
        const author = await createAuthor(req.body)
        res.status(201).json(author)
    } catch (err) {
        next(err)
    }
}

export async function putAuthor(req, res, next){
    try {
        const author = await updateAuthor({
            id: req.params.id, 
            ...req.body
        })
        res.json(author)
    } catch (err) {
        next(err)
    }
}

export async function delAuthor(req, res, next){
    try {
        await deleteAuthor({id: req.params.id})
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}