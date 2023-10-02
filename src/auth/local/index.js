const router = require('express').Router();

const { loginHandler } = require('./local.controller');

router.route('/').post(loginHandler);

module.exports = router;