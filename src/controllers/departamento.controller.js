import { getAll, getById } from "../services/departamento.services";
import { statusCode } from "../constants";

export const getDepartamentos = async (req, res) => {
  const result = await getAll();
  if (!result.valid) return res.status(statusCode.INTERNAL_ERROR).json(result);
  res.status(statusCode.OK).json(result);
};

export const getDepartamentoByID = async (req, res) => {
  const result = await getById(req);
  if (!result.valid) return res.status(statusCode.INTERNAL_ERROR).json(result);
  res.status(statusCode.OK).json(result);
};
