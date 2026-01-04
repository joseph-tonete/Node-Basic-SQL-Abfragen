import pool from "../config/db.js"

export async function findAuthor(id){
    const { rows } = await pool.query(
        `
        SELECT *
        FROM authors
        WHERE id = $1
        `,
        [id]
    )
    return rows[0]
}

export async function findAllAuthors(){
    const { rows } = await pool.query(
        `
        SELECT *
        FROM authors
        ORDER BY name ASC
        `
    )
    return rows
}

export async function insertNewAuthor({
    name,
    birth_year,
    death_year,
    country,
    wikipedia_url
}) {
    const { rows } = await pool.query(
        `
        INSERT INTO authors (
            name, 
            birth_year,
            death_year,
            country,
            wikipedia_url
        )
        VALUES ( $1, $2, $3, $4, $5)
        RETURNING *
        `, [
            name,
            birth_year,
            death_year,
            country,
            wikipedia_url
        ])
        return rows[0]
}

export async function updateAuthorById({
    id,
    name,
    birth_year,
    death_year,
    country,
    wikipedia_url
}) {
    const { rows } = await pool.query(
        `
        UPDATE authors
        SET
        name = COALESCE($2, name),
        birth_year = COALESCE($3, birth_year),
        death_year = COALESCE($4, death_year),
        country = COALESCE($5, country),
        wikipedia_url = COALESCE($6, wikipedia_url)
        WHERE id = $1
        RETURNING *
        `, [
            id,
            name,
            birth_year,
            death_year,
            country,
            wikipedia_url
        ])
        return rows[0]
}

export async function deleteAuthorById(id){
    const { rows } = await pool.query(`
        DELETE FROM authors
        WHERE id = $1
        RETURNING id
        `,
        [id]
    )
    return rows[0]
}