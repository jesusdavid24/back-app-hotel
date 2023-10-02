const { Schema, model, models } = require('mongoose');

const emailRegex = new RegExp('[a-zA-Z0-9]{5,10}@[a-z]{3,10}.com')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [15, 'Name must be at most 15 characters long'],
    },
    email: {
      type: String,
      match: [emailRegex, 'Email is not valid'],
      validate: [{ validator: async (value) => {
          try {
            const user = await models.user.findOne({ email: value })
            return !user
          } catch(error) {
            return false
          }
        },
        message: 'Email already exists'
      }]
    },
    password: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      minlength: [10, 'Phone must be at least 10 characters long'],
      maxlength: [20, 'Phone must be at most 20 characters long'],
    },
    role: {
      type: String,
      enum: ['CLIENT', 'ADMIN'], 
      default: 'CLIENT',
    },
    bookings: {
      type: [{ type: Schema.Types.ObjectId, ref: 'booking' }],
      required: false,
    },
  }, 
  {
    timestamps: true,
    versionKey: false,
  }
); 

const User = model('user', userSchema)

module.exports = User