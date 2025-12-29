import pool from "../config/db.js"

export async function findAdminByUsername(username) {
    const { rows } = await pool.query(
        `
            SELECT id, username, password_hash, is_active 
            FROM admin_users
            WHERE username = $1
            LIMIT 1;
        `,
        [username]
    )
    
    return rows[0]
}