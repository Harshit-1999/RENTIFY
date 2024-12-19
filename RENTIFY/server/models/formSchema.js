const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\d{10}$/, 'Phone number must be a 10-digit number'],
    },
    checkInDate: {
      type: Date,
      required: [true, 'Check-in date is required'],
      validate: {
        validator: function (v) {
          return v && v > Date.now(); // Ensure check-in date is in the future
        },
        message: 'Check-in date must be in the future',
      },
    },
    checkOutDate: {
      type: Date,
      required: [true, 'Check-out date is required'],
      validate: {
        validator: function (v) {
          return v && v > this.checkInDate; // Ensure check-out date is after check-in date
        },
        message: 'Check-out date must be later than check-in date',
      },
    },
    comments: {
      type: String,
      maxlength: [500, 'Comments cannot exceed 500 characters'],
      default: '',
    },
  },
  {
    timestamps: true, // Optionally add createdAt and updatedAt fields
  }
);

// Create and export the model
const Booking = mongoose.model('Booking', bookingDetailsSchema);

module.exports = Booking;
