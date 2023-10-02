const { 
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.service');

const userCreateHandler = async (req, res) => {
  try {
    const data = req.body;

    const user = await createUser(data);

    res.status(201).json({ message: 'User created', data: user });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

const listUsersHandler = async (req, res) => {
  try {
    const users = await listUsers()

    res.status(200).json({ message: 'Users listed', data: users });
  } catch(error) {
    res.status(400).json({ message: 'Error listing users', error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newUser = await updateUser(id, data);

    res.status(200).json({ message: 'User update', data: newUser });
  } catch (error) {
    res.status(400).json({ message: 'User could not updated', error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);

    res.status(200).json({ message: 'User delete', data: user});
  } catch (error) {
    res.status(400).json({ message: 'User could not deleted', error: error.message });
  }
};

module.exports = {
  listUsersHandler,
  userCreateHandler,
  updateUserHandler,
  deleteUserHandler,
};