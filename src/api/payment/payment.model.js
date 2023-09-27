const { Schema, model } = require('mongoose');

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
    },
    datePayment: {
      type: Date,
    },
    paymentType: {
      type: String,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'booking',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Payment = model('payment', paymentSchema);

module.exports = Payment;