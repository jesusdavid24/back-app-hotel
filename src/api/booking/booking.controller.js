const User = require('../users/user.model');
const Hotel = require('../hotel/hotel.model');
const { createUser } = require('../users/user.service');

const { 
  listBooking, 
  createBooking,
} = require('./booking.service');

const bookingCreateHandler = async (req, res) => {
  try {

    let user = null;
    
    const { 
      name,
      email,
      phone,
      dateCheckIn,
      dateCheckOut,
      paymentStatus,
      hotels
    }  = req.body;

    const newUser = {
      name,
      email,
      phone,
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
    }

    console.log(newBooking);

    const booking = await createBooking(newBooking);
    user.bookings.unshift(booking);
    await user.save({ validateBeforeSave: false });

    hotel.bookings.unshift(booking);
    await hotel.save({ validateBeforeSave: false });

    res.status(200).json({ message: 'Booking created', data: booking })

  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error: error.message })
  }
};

const listBookingHandler = async (req, res) => {
  try {
    const bookings = await listBooking();

    res.status(200).json({ message: 'Booking listed', data: bookings});
  } catch (error) {
    res.status(400).json({ message: 'Error listing bookings', error: error.message });
  }
}

module.exports = {
  bookingCreateHandler,
  listBookingHandler
}