const User = require('./user.model');

const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const listUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (id, data) => {
  try {
    const newUser = await User.findByIdAndUpdate(id, data, { new: true});
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
};