const router = require('express').Router();
const {
  listBookingHandler,
  bookingCreateHandler,
} = require('./booking.controller');

router.route('/').get(listBookingHandler);
router.route('/').post(bookingCreateHandler);

module.exports = router;