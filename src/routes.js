const userRoutes = require('./api/users');
const roleRoutes = require('./api/roles');
const hotelRoutes = require('./api/hotel');
const bookingRoutes = require('./api/booking');
const healtCheckRoute = require('./api/healtCheck');

const routes = (app) => {
  app.use('/api/users', userRoutes);
  app.use('/api/roles', roleRoutes);
  app.use('/api/hotels', hotelRoutes);
  app.use('/api/bookings', bookingRoutes);
  app.use('/api/healtcheck', healtCheckRoute);
};

module.exports = routes;