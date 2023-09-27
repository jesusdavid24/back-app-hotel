const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    dateChekIn: {
      type: Date,
      required: [true, 'You must enter a date'],
    },
    dateChekOut: {
      type: Date,
      required: [true, 'You must enter a date'],
    },
    paymentStatus: {
      type: Boolean,
      default: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'hotel',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Booking = model('booking', bookingSchema);

module.exports = Booking;