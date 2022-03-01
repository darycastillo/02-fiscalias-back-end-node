import User from "../models/User";

export const checkDuplicateUserOrEmail = async (req, res, next) => {
  const { username, email } = req.body;
  const userFound = await User.findOne({ username });
  if (userFound)
    return res.status(400).json({ message: "The user already exists" });
  const emailFound = await User.findOne({ email });
  if (emailFound)
    return res.status(400).json({ message: "The email already exists" });
  next();
};
