import departamentos from "./departamento.routes";
import auth from "./auth.routes";
import users from "./user.routes";

/* 
Se debe exportar el objeto de rutas con el nombre que debe tomar la ruta base
ejemplo: para "/api/departamentos", el objeto de rutas debe llamarse "departamentos"
*/
export { departamentos, auth, users };
