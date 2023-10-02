const router = require('express').Router();

const { 
  listHotelHandler, 
  hotelCreateHandler,
  updateHotelHandler,
  deleteHotelHandler, 
} = require('./hotel.controller');

router.route('/').get(listHotelHandler);
router.route('/').post(hotelCreateHandler);
router.route('/:id').put(updateHotelHandler);
router.route('/:id').delete(deleteHotelHandler);

module.exports = router;