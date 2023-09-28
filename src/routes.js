const healtCheckRoute = require('./api/healtCheck');
const userRoutes = require('./api/users');
const bookingRoutes = require('./api/booking');
const hotelRoutes = require('./api/hotel');

const routes = (app) => {
  app.use('/api/healtcheck', healtCheckRoute);
  app.use('/api/users', userRoutes);
  app.use('/api/bookings', bookingRoutes);
  app.use('/api/hotels', hotelRoutes);
}

module.exports = routes;