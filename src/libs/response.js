import { ERROR_TECNICO } from "../messages";
/**
 * Genera objeto de respuesta correcta
 * @param {*} data
 * @param {*} msg
 * @returns
 */
export const success = ({ data = {}, msg = "" }) => ({
  valid: true,
  msg,
  data,
});

/**
 * Genera objeto de error en la respuesta
 * @param {*} msg
 * @returns
 */
export const error = ({ error, msg = "", customErrorMessage }) => {
  const errorMsg =
    customErrorMessage ||
    (error ? (error.data ? error.data.msg : error.message) : ERROR_TECNICO);

  return {
    valid: false,
    msg: `${msg}: ${errorMsg}`,
  };
};