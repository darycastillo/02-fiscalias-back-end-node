import { Departamentos } from "../models/Departamentos.model";
import * as response from "../libs/response";
import { productMessages, NON_EXISTENT_RECORD } from "../messages";

export const getAll = async (req) => {
  try {
    const departamentos = await Departamentos.findAll({
      attributes: ["Id", "Nombre"],
    });
    return response.success({
      data: departamentos,
    });
  } catch (error) {
    return response.error({
      error,
      msg: productMessages.error.GET_ALL,
    });
  }
};

export const getById = async (req) => {
  try {
    const { Id } = req.params;
    const departamentos = await Departamentos.findAll({
      attributes: ["Id", "Nombre"],
      where: {
        Id,
      },
    });
    return response.success({
      data: departamentos,
    });
  } catch (error) {
    return response.error({
      error,
      msg: productMessages.error.GET,
    });
  }
};
