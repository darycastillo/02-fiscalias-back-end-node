import jwt from "jsonwebtoken";
import User from "../models/User";
import { config } from "../config";

export const verifyToken = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    /* Obtener token de los headers */
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provied" });
    /* Decodificar y validar que sea autentico  */
    const decodeToken = jwt.verify(token, config.SECRET_KEY);
    /* Asignar id la request */
    req.userId = decodeToken.id;
    /* Consultar si pertenece a un usuario */
    const user = await User.findById(decodeToken.id, { password: 0 });
    if (!user) return res.status(404).json({ message: "No use found" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isAdmin = async (req, res, next) => {
  const { userId } = req;
  const user = await User.findById({ _id: userId }).populate("roles");
  const isAdmin = user.roles.some((role) => role.name == "admin");
  if (isAdmin) return next();
  res.status(403).json({ message: "Requiere rol de administrador" });
};
