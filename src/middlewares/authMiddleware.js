import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    const err = new Error("Authorization header missing");
    err.statusCode = 401;
    return next(err);
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    const err = new Error("Invalid authorization format");
    err.statusCode = 401;
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = { id: decoded.adminId };
    next();
  } catch {
    const err = new Error("Invalid or expired token");
    err.statusCode = 401;
    next(err);
  }
}