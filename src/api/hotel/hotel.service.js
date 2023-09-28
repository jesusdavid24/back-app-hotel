const Hotel = require('./hotel.model');

const createHotel = async (data) => {
  try {
    const hotel = await Hotel.create(data);
    return hotel;
  } catch (error) {
    throw new Error(error);
  }
};

const listHotels = async () => {
  try {
    const hotels = await Hotel.find();
    return hotels;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  listHotels,
  createHotel,
}