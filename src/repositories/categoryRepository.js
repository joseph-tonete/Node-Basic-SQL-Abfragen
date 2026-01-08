import pool from "../config/db.js"

export async function listAllCategories(){
    const { rows } = await pool.query(
        `
        SELECT * FROM categories
        ORDER BY id
        `
    )
    return rows
}

export async function insertNewCategory(name){
    const { rows } = await pool.query(
        `
        INSERT INTO categories (name)
        VALUES ($1)
        RETURNING *;
        `,
        [name]
    )
    return rows[0]
}

export async function updateCategoryById(
    {
        id,
        name
    }
    ){
    const { rows } = await pool.query(
        `
        UPDATE categories
        SET 
        name = COALESCE($2, name)
        WHERE id = $1
        RETURNING *;
        `,
        [
            id,
            name
        ]
    )
    return rows[0]
}

export async function deleteCategoryById(categoryId){
    const { rows } = await pool.query(
        `
        DELETE FROM categories
        WHERE id = $1
        RETURNING id
        `,
        [categoryId]
    )
    return rows[0]
}