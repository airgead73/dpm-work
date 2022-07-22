const asyncHandler = require('express-async-handler');
const Shift = require('./shift');

/**
 * @desc Create shift
 * @route POST - /api/shifts
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const { success, errors } = res.val_results;

  if(success) {
    const shift = new Shift(req.body);
    await shift.save();

    return res
    .status(200)
    .json({
      success: true,
      message: `Shift created: ${shift.date_formatted}.`,
      shift
    });

  } else {

    return res
    .status(400)
    .json({
      success: false,
      message: 'Something went wrong.',
      errors
    });
  }

});

/**
 * @desc Read shifts
 * @route GET - /api/shifts
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results;

  return res
    .status(200)
    .json({
      success,
      count,
      shifts
    });

});

/**
 * @desc Read shift detail
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  const { success, message, data: shift } = res.results;

  return res
    .status(200)
    .json({
      success,
      message,
      shift
    });

});

/**
 * @desc Update shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'PUT shift'
    });

});

/**
 * @desc Delete author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'DELETE author'
    });

});