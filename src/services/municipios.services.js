import Models from "../models/init-models";
import * as response from "../libs/response";
import { SUCCESSFULLY_QUERY, getMessages } from "../messages";
import { sequelize } from "../config/database";
const { Municipios } = Models.initModels(sequelize);

export const getAll = async (req) => {
  try {
    const municipios = await Municipios.findAll();
    return response.success({
      data: municipios,
      msg: SUCCESSFULLY_QUERY,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Municipios").error.GET_ALL,
    });
  }
};

export const getById = async (req) => {
  try {
    const { Id } = req.params;
    const municipios = await Municipios.findAll({
      where: {
        Id,
      },
    });
    return response.success({
      data: municipios,
      msg: SUCCESSFULLY_QUERY,
    });
  } catch (error) {
    return response.error({
      error,
      msg: getMessages("Municipios").error.GET,
    });
  }
};
