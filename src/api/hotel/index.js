const router = require('express').Router();

const { 
  listHotelHandler, 
  hotelCreateHandler, 
} = require('./hotel.controller');

router.route('/').get(listHotelHandler);
router.route('/').post(hotelCreateHandler);

module.exports = router;