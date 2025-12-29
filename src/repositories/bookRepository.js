import pool from "../config/db.js"

export async function findAllBooks() {
    const { rows } = await pool.query(`
        SELECT id, isbn, title, year
        FROM books
        ORDER BY created_at DESC
        `)
    return rows
}

export async function insertNewBook({
    isbn, 
    createdByAdminId, 
    language, 
    publisher, 
    title, 
    subtitle, 
    summary, 
    edition, 
    year
    }) {
    const { rows } = await pool.query(
        `
        INSERT INTO books (
            isbn, 
            created_by_admin_id, 
            language, 
            publisher, 
            title, 
            subtitle, 
            summary, 
            edition, 
            year
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id, isbn, title, year
        `,
        [
            isbn, 
            createdByAdminId, 
            language, 
            publisher, 
            title, 
            subtitle, 
            summary, 
            edition, 
            year
        ]
    )
    return rows[0]
}