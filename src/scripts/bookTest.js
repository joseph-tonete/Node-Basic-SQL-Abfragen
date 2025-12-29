import { findAllBooks } from "../repositories/bookRepository.js";

async function run() {
    const books = await findAllBooks()
    console.log(books)
    process.exit(0)
}

run().catch(console.error)