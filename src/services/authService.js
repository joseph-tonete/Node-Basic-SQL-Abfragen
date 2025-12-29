import { comparePassword } from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";
import { findAdminByUsername } from "../repositories/adminUserRepository.js";

export async function login({username, password}){
    if(!username) {
        const err = new Error("Username is required!");
        err.statusCode = 400;
        throw err;
    }

    if(!password) {
        const err = new Error("Password is required!");
        err.statusCode = 400;
        throw err;
    }

    const admin = await findAdminByUsername(username)

    if(!admin || !admin.is_active) {
        const err = new Error("Invalid Credentials")
        err.statusCode = 401
        throw err
    }

    const passwordMatches = await comparePassword(password, admin.password_hash)

    if(!passwordMatches) {
        const err = new Error("Invalid Credentials")
        err.statusCode = 401
        throw err
    }

    // SUCCESS
    const token = jwt.sign(
    { adminId: admin.id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

    return token
}