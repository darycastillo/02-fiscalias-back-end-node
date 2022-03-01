import { getAll, getById } from "../services/fiscalias.services";
import { statusCode } from "../constants";

export const getFiscalias = async (req, res) => {
  const result = await getAll();
  if (!result.valid) return res.status(statusCode.INTERNAL_ERROR).json(result);
  res.status(statusCode.OK).json(result);
};

export const getFiscaliasByID = async (req, res) => {
  const result = await getById(req);
  if (!result.valid) return res.status(statusCode.INTERNAL_ERROR).json(result);
  res.status(statusCode.OK).json(result);
};
