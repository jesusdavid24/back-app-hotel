const Booking = require('./booking.model');

const createBooking = async (data) => {
  try {
    const booking = await Booking.create(data);
    return booking;
  } catch (error) {
    throw new Error(error);
  }
};

const listBooking = async () => {
  try {
    const bookings = await Booking.find();
    return bookings;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createBooking,
  listBooking,
}