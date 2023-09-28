const router = require('express').Router();

const healtCheckHanlder = require('./healtCheck.controller');

router.route('/').get(healtCheckHanlder);

module.exports = router;

