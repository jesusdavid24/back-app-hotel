const { Schema, model } = require('mongoose');

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [20, 'Name must be at most 20 characters long'],
    },
    city: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [20, 'Name must be at most 20 characters long'],
    },
    address: {
      type: String,
      required: [true, 'address es required'],
      minlength: [2, 'address must be at least 2 characters long'],
      maxlength: [30, 'address must be at most 30 characters long'],
    },
    description: {
      type: String,
      minlength: [2, 'description must be at least 2 characters long'],
      maxlength: [100, 'description must be at most 50 characters long'],
    },
    numRooms: {
      type: Number,
      required: [true, 'Number rooms is required'],
      min: [1, 'Must enter at least one room'],
    },
    ratePerNight: {
      type: Number,
      required: [true, 'You must enter a fee'],
      min: [1, 'you must enter a value greater than zero']
    },
    image: {
      type: String
    },
    bookings: {
      type: [{ type: Schema.Types.ObjectId, ref: 'booking' }],
      required: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Hotel = model('hotel', hotelSchema);

module.exports = Hotel;