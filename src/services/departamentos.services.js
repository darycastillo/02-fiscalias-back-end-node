import Models from "../models/init-models";
import * as response from "../libs/response";
import { SUCCESSFULLY_QUERY, getMessages } from "../messages";
import { sequelize } from "../config/database";
const { Departamentos } = Models.initModels(sequelize);

export const getAll = async (req) => {
  try {
    const departamentos = await Departamentos.findAll();
    return response.success({
      data: departamentos,
      msg: SUCCESSFULLY_QUERY,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Departamentos").error.GET_ALL,
    });
  }
};

export const getById = async (req) => {
  try {
    const { Id } = req.params;
    const departamentos = await Departamentos.findAll({
      where: {
        Id,
      },
    });
    return response.success({
      data: departamentos,
      msg: SUCCESSFULLY_QUERY,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Departamentos").error.GET,
    });
  }
};
