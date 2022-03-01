const { Sequelize, DataTypes } = require('sequelize');
import { sequelize } from "../config/database";
// const sequelize = new Sequelize('sqlite::memory:');

export const Departamentos = sequelize.define("Departamentos", {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING,
  },
});
