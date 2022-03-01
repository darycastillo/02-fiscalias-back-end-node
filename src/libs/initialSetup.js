import Role from "../models/Role";

export const createRoles = async () => {
  try {
    /* Obtener numero de docs  */
    let count = await Role.estimatedDocumentCount(); 
    /* Si existen docs en la base salimos de la function */
    if (count > 0) return;
    /* Guardar roles por defecto */
    const Roles = [{ name: "user",other:"ds " }, { name: "admin" }, { name: "moderator" }];
    const values = await Role.insertMany(Roles);
    console.log({ values });
  } catch (error) {
    console.log(error);
  }
};
 