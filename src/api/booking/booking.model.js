const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    dateCheckIn: {
      type: Date,
      required: [true, 'You must enter a date'],
    },
    dateCheckOut: {
      type: Date,
      required: [true, 'You must enter a date'],
    },
    paymentStatus: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    // hotel: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'hotel',
    //   required: true
    // }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Booking = model('booking', bookingSchema);

module.exports = Booking;