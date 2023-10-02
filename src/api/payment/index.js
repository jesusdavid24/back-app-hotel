const router = require('express').Router();
const { handlePayment } = require('./payment.controller');

router.route('/').post(handlePayment);

module.exports = router;