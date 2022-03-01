import { DataTypes } from "sequelize";
import _Municipios from "./Municipios";
import _Departamentos from "./Departamentos";
import _Fiscalias from "./Fiscalias";

const initModels = (sequelize) => {
  const Departamentos = _Departamentos(sequelize, DataTypes);
  const Fiscalias = _Fiscalias(sequelize, DataTypes);
  const Municipios = _Municipios(sequelize, DataTypes);

  Fiscalias.belongsTo(Departamentos, {
    as: "Departamento",
    foreignKey: "Departamento_id",
  });
  Departamentos.hasMany(Fiscalias, {
    as: "Fiscaliases",
    foreignKey: "Departamento_id",
  });
  Municipios.belongsTo(Departamentos, {
    as: "Departamento",
    foreignKey: "Departamento_id",
  });
  Departamentos.hasMany(Municipios, {
    as: "Municipios",
    foreignKey: "Departamento_id",
  });
  Fiscalias.belongsTo(Municipios, {
    as: "Municipio",
    foreignKey: "Municipio_id",
  });
  Municipios.hasMany(Fiscalias, {
    as: "Fiscaliases",
    foreignKey: "Municipio_id",
  });

  return {
    Departamentos,
    Fiscalias,
    Municipios,
  };
};

export default {
  initModels,
};
