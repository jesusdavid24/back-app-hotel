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

const updateBooking = async (id, data) => {
  try {
    const newBooking = await Booking.findByIdAndUpdate(id, data, { new: true });
    return newBooking;
  } catch (error) {
    throw new Error(error);
  };
};

const deleteBooking = async (id) => {
  try {
    const booking = await Booking.findByIdAndDelete(id);
    return booking;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  listBooking,
  createBooking,
  updateBooking,
  deleteBooking,
};