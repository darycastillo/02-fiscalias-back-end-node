import "./config/environment";
import app from "./app";
import { config } from "./config";

console.log(config);
/* Conectarse a la base de datos */
// database.init();
/* Levantar servidor en el puerto especificado */
app.listen(config.APP_PORT);
console.log("\x1b[32m", "Listen on port ", config.APP_PORT);
