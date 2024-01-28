import User from "../models/userModel.js";

export const adminMiddleware = (adminRole) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.user);
      if (user.role === adminRole) next();
    } catch (error) {
      throw new Error("Unauthorized to access this route");
    }
  };
};
