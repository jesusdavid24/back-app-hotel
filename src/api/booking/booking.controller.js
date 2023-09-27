const { 
  createBooking,
  listBooking } = require('./booking.service');

const bookingCreateHandler = async (req, res) => {
  try {
    const data = req.body;

    const booking = await createBooking(data);

    res.status(200).json({ message: 'Booking created', data: booking })

  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error: error.message })
  }
};

const listBookingHandler = async (req, res) => {
  try {
    const bookings = await listBooking();

    res.status(200).json({ message: 'Booking listed', data: bookings})
  } catch (error) {
    res.status(400).json({ message: 'Error listing bookings', error: error.message })

  }
}

module.exports = {
  bookingCreateHandler,
  listBookingHandler
}