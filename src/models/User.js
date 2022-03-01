import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true, versionkey: false }
);

/* Metodos propios del modelo */
/**
 * Devuelve el password encriptado
 * @param {*} password
 * @returns
 */
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 *  Devuelve true si los passwords son iguales
 * @param {*} password
 * @param {*} receivedPassword
 * @returns
 */
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
