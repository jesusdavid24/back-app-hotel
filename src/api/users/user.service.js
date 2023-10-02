const User = require('./user.model');
const { hashPassword } = require('../../auth/utils/bcrypt');

const createUser = async (data) => {
  try {
    if (data.password) {
      const hashedPassword = await hashPassword(data.password);
      data.password = hashedPassword;
    }

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

const listUserByEmail = async (email) => {
  try {
    const userEmail = await User.findOne({ email: email });
    return userEmail;
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
  listUserByEmail,
};