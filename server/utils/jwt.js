import jwt from "jsonwebtoken";

const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const verifyToken = (token, secret) => {
  try {
    const { user } = jwt.verify(token, secret);
    return { user };
  } catch (error) {
    throw new Unauthenticated("Unauthenticated");
  }
};

export { createJWT, verifyToken };
