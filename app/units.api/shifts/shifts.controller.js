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

  const updatedShift = await Shift.findByIdAndUpdate(shift.id, req.body, { new: true });

  return res
    .status(200)
    .json({
      success,
      message: `Shift updated: ${shift.date_formatted}`,
      shift: updatedShift
    });

});

/**
 * @desc Delete shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  shift.remove();

  return res
    .status(200)
    .json({
      success,
      message: `Shift has been deleted: ${shift.date_formatted}`
    });

});

/**
 * @desc drop all shifts
 * @route DELETE - /api/shifts/drop
 * @access Private
 * */

 exports.drop = asyncHandler(async (req, res, next) => {

  await Shift.deleteMany({});

  return res
    .status(200)
    .json({
      success: true,
      message: 'All shifts deleted.'
    });

});

/**
 * @desc Add shift units
 * @route PUT - /api/shifts/:id/units
 * @access Private
 * */

 exports.units = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  let reqBody = {...req.body};
  const { units: newUnits } = reqBody;

  const totalUnits = parseInt(shift.units) + parseInt(newUnits);
  reqBody.units = totalUnits;

  const updatedShift = await Shift.findByIdAndUpdate(shift.id, reqBody, { new: true});

  return res
    .status(200)
    .json({
      success,
      message: `Added ${newUnits} units to ${shift.date_formatted}.`,
      shift: updatedShift
    });

});

/**
 * @desc End shift
 * @route PUT - /api/shifts/:id/end
 * @access Private
 * */

 exports.end = asyncHandler(async (req, res, next) => {

  const endedShift = await Shift.findByIdAndUpdate(req.params.id, {"active": false}, { new: true });

  return res
    .status(200)
    .json({
      success: true,
      message: `Shift ended: ${endedShift.date_formatted}`,
      shift: endedShift
    });

});