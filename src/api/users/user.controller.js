const { createBooking } = require('../booking/booking.service')

const { 
  createUser,
  listUsers
} = require('./user.service');

const userCreateHandler = async (req, res) => {
  try {

    const { 
      name,
      email,
      phone,
      dateCheckIn,
      dateCheckOut,
      paymentStatus
    }  = req.body

    const newUser = {
      name,
      email,
      phone,
    }

    console.log(newUser);

    const user = await createUser(newUser);

    const newBooking = {
      dateCheckIn,
      dateCheckOut,
      paymentStatus,
      user: user._id,
    }

    console.log(newBooking);

    const booking = await createBooking(newBooking)
    user.bookings.unshift(booking)
    await user.save({ validateBeforeSave: false })

    // email send

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
  userCreateHandler,
  listUsersHandler
}