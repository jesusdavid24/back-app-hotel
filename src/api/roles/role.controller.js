const { 
  listRoles, 
  createRole 
} = require('./role.service');

const roleCreateHandler = async (req, res) => {
  try {
    const data = req.body;

    const role = await createRole(data);

    res.status(201).json({ message: 'Role created', data: role });
  } catch (error) {
    res.status(400).json({ message: 'Error creating role', error: error.message });
  }
};

const listRolesHandler = async (req, res) => {
  try {
    const roles = await listRoles();

    res.status(200).json({ message: 'Roles listed', data: roles });
  } catch(error) {
    res.status(400).json({ message: 'Error listing roles', error: error.message });
  }
};

module.exports = {
  listRolesHandler,
  roleCreateHandler,
};