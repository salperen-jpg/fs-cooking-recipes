import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

const comparePassword = async (pass, hashedPass) => {
  const isPasswordMatched = await bcrypt.compare(pass, hashedPass);
  return isPasswordMatched;
};

export { hashPassword, comparePassword };
