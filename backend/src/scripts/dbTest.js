import pool from "../config/db.js"

async function testConnection() {
    const result = await pool.query("SELECT NOW()")
    console.log("DB time: ", result.rows[0] )
    process.exit(0)
}

testConnection().catch(err => {
    console.error(err)
    process.exit(1)
})