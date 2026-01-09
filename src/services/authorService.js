import { findAuthorById, findAllAuthors, insertNewAuthor, updateAuthorById, deleteAuthorById } from "../repositories/authorRepository.js"

export async function listAuthor(authorData){
    if(!authorData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    const author = await findAuthorById(authorData.id)

    if (!author) { 
        const err = new Error("Author not found")
        err.statusCode = 404
        throw err
    }

    return author
}

export async function listAuthors(){
    const authors = await findAllAuthors()
    return authors
}

export async function createAuthor(authorData){
    if(!authorData.name){
        const err = new Error("Name is required")
        err.statusCode = 400
        throw err
    }

    try {
        return await insertNewAuthor(authorData)
    } catch (err) {
        if (err.code === "23505") {
            err.statusCode = 409
            err.message = "Author already exists"
        }
        throw err 
    }
}

export async function updateAuthor(authorData){
    if(!authorData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    const updated = await updateAuthorById(authorData)

    if (!updated){
        const err = new Error("Author not found")
        err.statusCode = 404
        throw err
    }

    return updated

}

export async function deleteAuthor(authorData){
    if(!authorData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    const deleted = await deleteAuthorById(authorData.id)

    if(!deleted) {
        const err = new Error("Author not found")
        err.statusCode = 404
        throw err
    }

    return
}