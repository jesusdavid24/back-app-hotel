const userRoutes = require('./api/users');
const hotelRoutes = require('./api/hotel');
const loginRoutes = require('./auth/local')
const bookingRoutes = require('./api/booking');
const healtCheckRoute = require('./api/healtCheck');

const routes = (app) => {
  app.use('/api/users', userRoutes);
  app.use('/api/hotels', hotelRoutes);
  app.use('/api/bookings', bookingRoutes);
  app.use('/api/auth/local', loginRoutes);
  app.use('/api/healtcheck', healtCheckRoute);
};

module.exports = routes;