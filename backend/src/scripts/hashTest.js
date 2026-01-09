import bcrypt from "bcrypt"

const saltRounds = 10

const password = "admin"

// Hash the password
bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err) throw err
    console.log(`Hashed password: ${hash}`)
})