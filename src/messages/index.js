export const ERROR_TECNICO = "Error tecnico.";
export const NON_EXISTENT_RECORD = "El registro no existe o ya fue eliminado.";
export const SUCCESSFULLY_QUERY = "Consulta realizada con exito.";

export const getMessages = (entityName) => ({
  succes: {
    GET: "Consulta Exitosa",
    GET_ALL: "Consulta Exitosa",
    CREATE: `Registro de ${entityName} creado.`,
    UPDATE: `Registro de ${entityName} actualizado.`,
    DELETE: `Registro de ${entityName} eliminado.`,
  },
  error: {
    CREATE: `Error al crear ${entityName}`,
    GET: `Error al obtener ${entityName}`,
    GET_ALL: `Error al obtener ${entityName}`,
    UPDATE: `Error al actualizar ${entityName}`,
    DELETE: `Error al eliminar ${entityName}`,
  },
});
