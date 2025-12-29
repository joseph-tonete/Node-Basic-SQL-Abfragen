import pool from "../config/db.js"

export async function findAllBooks() {
    const { rows } = await pool.query(`
        SELECT id, isbn, title, year
        FROM books
        ORDER BY created_at DESC
        `)
    return rows
}