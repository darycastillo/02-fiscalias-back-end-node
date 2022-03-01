import Models from "../models/init-models";
import * as response from "../libs/response";
import { SUCCESSFULLY_QUERY, getMessages } from "../messages";
import { sequelize } from "../config/database";
const { Fiscalias } = Models.initModels(sequelize);

export const getAll = async (req) => {
  try {
    const fiscalias = await Fiscalias.findAll({
      include: ["Departamento", "Municipio"],
    });
    return response.success({
      data: fiscalias,
      msg: SUCCESSFULLY_QUERY,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Fiscalias").error.GET_ALL,
    });
  }
};

export const getById = async (req) => {
  try {
    const { Id } = req.params;
    const fiscalias = await Fiscalias.findAll({
      attributes: ["Id", "Nombre"],
      where: {
        Id,
      },
    });
    return response.success({
      data: fiscalias,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Fiscalias").error.GET,
    });
  }
};
