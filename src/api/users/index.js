const router = require('express').Router();

const { 
  listUsersHandler, 
  userCreateHandler, 
} = require('./user.controller');

router.route('/').get(listUsersHandler);
router.route('/').post(userCreateHandler);

module.exports = router;