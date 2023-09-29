const router = require('express').Router();

const {
  listRolesHandler,
  roleCreateHandler,
} = require('./role.controller');

router.route('/').get(listRolesHandler);
router.route('/').post(roleCreateHandler);

module.exports = router;