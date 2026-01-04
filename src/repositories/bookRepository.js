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

export async function updateBookById({
    id,
    isbn,
    language,
    publisher,
    title,
    subtitle,
    summary,
    edition,
    year
}){
    const { rows } = await pool.query(
        `
        UPDATE books
        SET
        isbn = COALESCE($2, isbn),
        language = COALESCE($3, language),
        publisher = COALESCE($4, publisher),
        title = COALESCE($5, title),
        subtitle = COALESCE($6, subtitle),
        summary = COALESCE($7, summary),
        edition = COALESCE($8, edition),
        year = COALESCE($9, year),
        updated_at = NOW()
        WHERE id = $1
        RETURNING *;
        
        `,
        [
            id,
            isbn,
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

export async function deleteBookById(id) {
  const result = await pool.query(
    `
    DELETE FROM books
    WHERE id = $1
    `,
    [id]
  );

  return result.rowCount;
}