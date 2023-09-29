const { Schema, model, models } = require('mongoose');

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['CLIENT', 'ADMIN'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Role = model('role', roleSchema);

module.exports = Role;