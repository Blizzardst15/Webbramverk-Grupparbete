const Skola = require('../models/SkolaModel');

// @desc    Get all skolor
// @route   GET /api/skolor
// @access  Public
exports.getSkolor = async (req, res, next) => {
  try {
    const skolor = await Skola.find();

    return res.status(200).json({
      success: true,
      count: skolor.length,
      data: skolor
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add Skola
// @route   POST /api/skolor
// @access  Public
exports.addSkola = async (req, res, next) => {
  try {
    const { text, teacha } = req.body;

    const skola = await Skola.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: skola
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete Skola
// @route   DELETE /api/skolor/:id
// @access  Public
exports.deleteSkola = async (req, res, next) => {
  try {
    const skola = await Skola.findById(req.params.id);

    if(!skola) {
      return res.status(404).json({
        success: false,
        error: 'No Skola found'
      });
    }

    await skola.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}