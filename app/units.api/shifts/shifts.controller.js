const asyncHandler = require('express-async-handler');
const Shift = require('./shift');

/**
 * @desc Create shift
 * @route POST - /api/shifts
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const { success, errors } = res.val_result;

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

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .json({
      success,
      message: "detail message",
      shift
    });

});

/**
 * @desc Update shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .json({
      success,
      message: "update message",
      shift
    });

});

/**
 * @desc Delete author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .json({
      success,
      message: "delete message",
      shift
    });

});

/**
 * @desc Add shift units
 * @route PUT - /api/shifts/:id/units
 * @access Private
 * */

 exports.units = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .json({
      success,
      message: "add units to shift",
      shift
    });

});

/**
 * @desc Add shift units
 * @route PUT - /api/shifts/:id/end
 * @access Private
 * */

 exports.end = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .json({
      success,
      message: "end shift",
      shift
    });

});