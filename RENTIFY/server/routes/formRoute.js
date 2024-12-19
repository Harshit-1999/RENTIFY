const express = require('express');
const mongoose = require('mongoose');
const Booking = require('../models/formSchema')

const router = express.Router();

// 1. Create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const formData = req.body;

    // Create a new booking instance
    const booking = new Booking({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      checkInDate: formData.checkInDate,
      checkOutDate: formData.checkOutDate,
      comments: formData.comments,
    });

    // Save the booking to the database
    await booking.save();

   return res.status(201).json({
      message: 'Booking created successfully',
      booking,
      Status:"Booking Done"
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error creating booking',
      error: error.message,
    });
  }
});

// 2. Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching bookings',
      error: error.message,
    });
  }
});

// 3. Get a single booking by ID
router.get('/bookings/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;

    // Find the booking by ID
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found',
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching booking',
      error: error.message,
    });
  }
});

// 4. Update a booking by ID
router.put('/bookings/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;
    const formData = req.body;

    // Find the booking by ID and update it
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      formData,
      { new: true, runValidators: true } // Ensure the new document is returned and validation is applied
    );

    if (!updatedBooking) {
      return res.status(404).json({
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      message: 'Booking updated successfully',
      updatedBooking,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error updating booking',
      error: error.message,
    });
  }
});

// 5. Delete a booking by ID
router.delete('/bookings/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;

    // Delete the booking by ID
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      message: 'Booking deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting booking',
      error: error.message,
    });
  }
});

module.exports = router;
