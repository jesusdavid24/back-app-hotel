const router = require('express').Router();
const { 
  hasRole, 
  isAuthenticated,
} = require('../../auth/auth.controller');

const { 
  listUsersHandler, 
  userCreateHandler,
  updateUserHandler,
  deleteUserHandler 
} = require('./user.controller');

router.route('/').get(isAuthenticated, hasRole(['ADMIN']), listUsersHandler);
router.route('/').post(userCreateHandler);
router.route('/:id').put(isAuthenticated, hasRole(['ADMIN']), updateUserHandler);
router.route('/:id').delete(isAuthenticated, hasRole(['ADMIN']), deleteUserHandler);

module.exports = router;