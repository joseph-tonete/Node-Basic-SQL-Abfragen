import pool from "../config/db.js"

export async function addAuthorToBook(bookId, authorId) {
    await pool.query(`
        INSERT INTO book_authors (book_id, author_id)
        VALUES ($1, $2)
        `,
        [bookId, authorId]
    )
}

export async function removeAuthorFromBook(bookId, authorId){
    const { rowCount } = await pool.query(`
        DELETE FROM book_authors
        WHERE book_id = $1 AND author_id = $2
        `,
        [bookId, authorId]
    )
    return rowCount
}

export async function listAuthorsByBook(bookId){
    const { rows } = await pool.query(`
        SELECT a.*
        FROM authors a
        JOIN book_authors ba ON ba.author_id = a.id
        WHERE ba.book_id = $1
        `,
        [bookId]    
    )
    return rows
}