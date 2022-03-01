import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const signUp = async (req, res) => {
  const { username, password, email, roles } = req.body;
  const newUser = new User({
    username,
    password: await User.encryptPassword(password),
    email,
  });
  if(roles){
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
  }else{
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
  }
  const savedUser = await newUser.save();
  /* Generar token */
  const token = jwt.sign({ id: savedUser._id }, config.SECRET_KEY, {
    expiresIn: 86400,
  });
  res.json({ token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  /* Se consulta el usuario con sus roles, se cargan por medido de la realcion entre collections */
  const userFound = await User.findOne({ email }).populate('roles','name');
  if (!userFound) return res.status(400).json({ message: "User not found" });
  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );
  if (!matchPassword)
    return res.json({ token: null, message: "Invalid password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET_KEY, {
    expiresIn: 86400,
  });
  res.json({ token });
};
