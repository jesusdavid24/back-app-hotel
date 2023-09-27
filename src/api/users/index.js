const router = require('express').Router();
const { 
  userCreateHandler, 
  listUsersHandler 
} = require('./user.controller');

router.route('/').get(listUsersHandler);
router.route('/').post(userCreateHandler);

module.exports = router;