const router = require('express').Router();

const { 
  isAuthenticated, 
  hasRole 
} = require('../../auth/auth.controller');

const {
  listBookingHandler,
  bookingCreateHandler,
  updateBookingHandler,
  deleteBookingHandler
} = require('./booking.controller');

router.route('/').get(isAuthenticated, hasRole(['ADMIN']), listBookingHandler);
router.route('/').post(bookingCreateHandler);
router.route('/:id').put(isAuthenticated, hasRole(['ADMIN']), updateBookingHandler);
router.route('/:id').delete(deleteBookingHandler);

module.exports = router;