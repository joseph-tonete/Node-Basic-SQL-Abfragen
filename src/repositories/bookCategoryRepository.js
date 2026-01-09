import pool from "../config/db.js"

export async function addCategoryToBook(bookId, categoryId){
    await pool.query(
        `
        INSERT INTO book_categories (book_id, category_id)
        VALUES ($1, $2)
        `,
        [
            bookId,
            categoryId
        ]
    )
}

export async function removeCategoryFromBook(bookId, categoryId){
    const { rowCount } = await pool.query(
        `
        DELETE FROM book_categories 
        WHERE book_id = $1 AND author_id = $2
        `,
        [
            bookId,
            categoryId
        ]
    )
    return rowCount
}

export async function listCategoriesByBook(bookId){
    const { rows } = await pool.query(
        `
        SELECT a.*
        FROM categories a
        JOIN book_categories ba ON ba.category_id = a.id
        WHERE ba.book_id = $1
        `,
        [bookId]  
    )
    return rows
}