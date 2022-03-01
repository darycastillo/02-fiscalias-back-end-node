/**
 * Generar las rutas en base al objeto routes
 * @param {*} app
 * @param {*} routes
 */
export const generateRoutes = ({ app, routes }) => {
  for (const routeName in routes) {
    if (Object.hasOwnProperty.call(routes, routeName)) {
      /* Se toma el nombre de la propiedad como nombre base de la ruta, eje: api/products, 
      donde "products" en una propiedad del objeto routes */
      app.use(`/api/${routeName}`, routes[routeName]);
    }
  }
};
