const Role = require('./role.model');

const createRole = async (data) => {
  try {
    const role = await Role.create(data);
    return role;
  } catch (error) {
    throw new Error(error);
  }
};

const listRoles = async () => {
  try {
    const roles = await Role.find();
    return roles;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  listRoles,
  createRole,
};