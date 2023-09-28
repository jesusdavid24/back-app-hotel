const { 
  listUsers,
  createUser,
} = require('./user.service');

const userCreateHandler = async (req, res) => {
  try {
    const data = req.body;

    const user = await createUser(data);

    res.status(201).json({ message: 'User created', data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating user', error: error.message })
  }
};

const listUsersHandler = async (req, res) => {
  try {
    const users = await listUsers()

    res.status(200).json({ message: 'Users listed', data: users })
  } catch(error) {
    res.status(400).json({ message: 'Error listing users', error: error.message })
  }
};

module.exports = {
  listUsersHandler,
  userCreateHandler,
};