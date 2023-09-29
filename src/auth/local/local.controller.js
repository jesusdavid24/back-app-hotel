const { signToken } = require('../auth.service');
const { comparePassword } = require('../utils/bcrypt');
const { errorHandler } = require('../../utils/errorHandler')
const { listUserByEmail } = require('../../api/users/user.service');


const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await listUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = signToken(payload);

    const newUser = {
      fullName: user.name,
      email: user.email,
      role: user.role,
    };

    res.status(200).json({ token, newUser });
  } catch (exception) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
};

module.exports = {
  loginHandler
};
