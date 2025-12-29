import { login } from "../services/authService.js";

export async function loginController(req, res, next){
    try {
        const result = await login(req.body)
        res.json(result)
    } catch (err) {
        next(err)
    }
}