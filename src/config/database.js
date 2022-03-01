import Sequelize from "sequelize";
import * as config from "./config";

export const sequelize = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASS,
  {
    host: config.DATABASE_HOST,
    dialect: config.DATABASE_DIALECT,
  }
);

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
