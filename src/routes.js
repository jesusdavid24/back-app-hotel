const userRoutes = require('./api/users')

const routes = (app) => {
  app.use('/api/users', userRoutes);
}

module.exports = routes;