const router = require('express').Router();

const { 
  listUsersHandler, 
  userCreateHandler,
  updateUserHandler,
  deleteUserHandler 
} = require('./user.controller');

router.route('/').get(listUsersHandler);
router.route('/').post(userCreateHandler);
router.route('/:id').put(updateUserHandler);
router.route('/:id').delete(deleteUserHandler);

module.exports = router;