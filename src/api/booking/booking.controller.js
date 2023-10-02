const User = require('../users/user.model');
const Hotel = require('../hotel/hotel.model');
const { createUser } = require('../users/user.service');
const { sendNodeMailer } = require('../../config/nodemailer');
const { emailBooking } = require('../../utils/sendEmail');

const { 
  listBooking, 
  createBooking,
  updateBooking,
  deleteBooking
} = require('./booking.service');

const bookingCreateHandler = async (req, res) => {
  try {

    let user = null;
    
    const { 
      name,
      role,
      email,
      phone,
      hotels,
      dateCheckIn,
      dateCheckOut,
      paymentStatus,
    }  = req.body;

    const newUser = {
      name,
      email,
      phone,
      role,
    };

    user = await User.findOne({ email: email });

    if(!user) {
      user = await createUser(newUser);
    };

    const hotel = await Hotel.findById(hotels);

    const newBooking = {
      dateCheckIn,
      dateCheckOut,
      paymentStatus,
      user: user._id,
      hotels: hotel._id
    };

    const booking = await createBooking(newBooking);
    user.bookings.unshift(booking);
    await user.save({ validateBeforeSave: false });

    hotel.bookings.unshift(booking);
    await hotel.save({ validateBeforeSave: false });

    await sendNodeMailer(emailBooking(user));

    res.status(200).json({ message: 'Booking created', data: booking });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating booking', error: error.message });
  }
};

const listBookingHandler = async (req, res) => {
  try {
    const bookings = await listBooking();

    res.status(200).json({ message: 'Booking listed', data: bookings});
  } catch (error) {
    res.status(400).json({ message: 'Error listing bookings', error: error.message });
  }
};

const updateBookingHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newBooking = await updateBooking(id, data);

    res.status(200).json({ message: 'Booking update', data: newBooking });
  } catch (error) {
    res.status(400).json({ message: 'Booking could not updated', error: error.message });
  }
};

const deleteBookingHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await deleteBooking(id);

    const hotel = await Hotel.findOne({ bookings: booking._id });
    
    if (hotel) {
      hotel.bookings = hotel.bookings.filter((bookingId) => bookingId.toString() !== id);
      await hotel.save({ validateBeforeSave: false });
    }

    res.status(200).json({ message: 'Booking delete', data: booking });
  } catch (error) {
    res.status(400).json({ message: 'Booking could not deleted', error: error.message });
  }
};

module.exports = {
  listBookingHandler,
  bookingCreateHandler,
  updateBookingHandler,
  deleteBookingHandler,
};