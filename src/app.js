import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
/* Configuracion */
import { routesSetup } from "./libs";
/* Routes */
import * as routes from "./routes";
/* Instancia de express */
const app = express();
/* Setear package.json como variable */
app.set("pkg", pkg);
/* Visualizar las peticiones en consola */
app.use(morgan("dev"));
/* Leer los request en formato json */
app.use(express.json({ extended: true }));
/* RUTAS */
/* Ruta por default, informacion del backend */
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

/* Logica de aplicacion, se generan las rutas de forma dinamica */
routesSetup.generateRoutes({ app, routes });

export default app;
