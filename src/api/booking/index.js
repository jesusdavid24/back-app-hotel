const router = require('express').Router();
const {
  bookingCreateHandler,
  listBookingHandler
} = require('./booking.controller');

router.route('/').get(listBookingHandler);
router.route('/').post(bookingCreateHandler);

module.exports = router;