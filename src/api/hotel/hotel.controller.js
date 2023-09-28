const {
  listHotels,
  createHotel,
} = require('./hotel.service');

const hotelCreateHandler = async (req, res) => {
  try {
    const data = req.body;

    const hotel = await createHotel(data);

    res.status(201).json({ message: 'Hotel created', data: hotel });

  } catch (error) {
    res.status(400).json({ message: 'Error creating hotel', error: error.message});
  }
};

const listHotelHandler = async (req, res) => {
  try {
    const hotels = await listHotels();

    res.status(200).json({ message: 'Hotels listed', data: hotels});

  } catch (error) {
    res.status(400).json({ message: 'Error listing hotels', error: error.message });
  }
};

module.exports = {
  listHotelHandler,
  hotelCreateHandler,
}