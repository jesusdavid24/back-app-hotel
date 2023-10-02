const {
  listHotels,
  createHotel,
  updateHotel,
  deleteHotel,
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

const updateHotelHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newHotel = await updateHotel(id, data);

    res.status(200).json({ message: 'Hotel update', data: newHotel });
  } catch (error) {
    res.status(400).json({ message: 'Hotel could not updated', error: error.message });
  }
};

const deleteHotelHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await deleteHotel(id);

    res.status(200).json({ message: 'Hotel deleted', data: hotel});
  } catch (error) {
    res.status(400).json({ message: 'Hotel could not delete', error: error.message });
  }
};


module.exports = {
  listHotelHandler,
  hotelCreateHandler,
  updateHotelHandler,
  deleteHotelHandler,
};