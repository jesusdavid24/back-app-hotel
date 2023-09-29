const { listUserByEmail } = require('../api/users/user.service');
const { verifyToken } = require('./auth.service');

const isAuthenticated = async (req, res, next) => {
  
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Unauthorized! You have to log in first.' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Token not decoded' });
  }

  const user = (await listUserByEmail(decoded.email));

  req.users = user;

  return next();
}

const hasRole = async (rolesAllowed) => {
  return async (req, res, next) => {
    const { roleId } = req.users;
    const role = await getRoleById(roleId);
    const hasPermission = rolesAllowed.includes(role?.name);

    if (!hasPermission) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return next();
  };
}

module.exports = {
  hasRole,
  isAuthenticated,
}