import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json";
import { routesSetup } from "./libs";
import * as routes from "./routes";

const app = express();
app.set("pkg", pkg);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ extended: true }));

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
