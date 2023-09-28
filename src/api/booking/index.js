const router = require('express').Router();
const {
  listBookingHandler,
  bookingCreateHandler,
  updateBookingHandler,
  deleteBookingHandler
} = require('./booking.controller');

router.route('/').get(listBookingHandler);
router.route('/').post(bookingCreateHandler);
router.route('/:id').put(updateBookingHandler);
router.route('/:id').delete(deleteBookingHandler);

module.exports = router;