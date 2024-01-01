import { Unauthenticated } from "../errors/errorClasses.js";
import { verifyToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new Unauthenticated("Unauthenticated");
  try {
    const validUser = verifyToken(token, process.env.JWT_SECRET_KEY);
    req.user = validUser;
    next();
  } catch (error) {
    throw new Unauthenticated("Unauthenticated");
  }
};

export default authMiddleware;
