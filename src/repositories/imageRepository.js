import pool from "../config/db.js"

export async function listImagesByBookId(bookId){
    const { rows } = await pool.query(
        `
        SELECT file_code, sort_order 
        FROM book_images
        WHERE book_id = $1
        ORDER BY sort_order
        `,
        [bookId]
    )
    return rows
}

export async function insertBookImage(
    {
        bookId,
        fileCode,
        sortOrder
    }
    ) {
    const { rows } = await pool.query(
        `
        INSERT INTO book_images (book_id, file_code, sort_order)
        VALUES ($1, $2, $3)
        `, 
        [
            bookId,
            fileCode,
            sortOrder
        ]
    )
    return rows[0]
}

export async function getNextSortOrder(bookId) {
  const { rows } = await pool.query(
    `
    SELECT COALESCE(MAX(sort_order), 0) + 1 AS next
    FROM book_images
    WHERE book_id = $1
    `,
    [bookId]
  )
  return rows[0].next
}