const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc shift dashboard view
 * @route GET - /shifts
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results;

  return res
    .status(200)
    .render('pages/shifts/dashboard', {
      title: 'shifts',
      development: isDev,
      success,
      count,
      shifts
    });
});

/**
 * @desc shift add view
 * @route GET - /shifts/add
 * @access Private
 * */

 exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/shifts/add', {
      title: 'add shift',
      development: isDev
    });
});

/**
 * @desc shift detail view
 * @route GET - /shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  const { success, data: shift } = res.item_result;

  return res
    .status(200)
    .render('pages/shifts/detail', {
      title: `${shift.date_formatted}`,
      development: isDev,
      shift
    });
});

/**
 * @desc shift update view
 * @route GET - /shifts/:id/update
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/shifts/update', {
      title: 'update shift',
      development: isDev,
    });
});

/**
 * @desc shift add items view
 * @route GET - /shifts/:id/items
 * @access Private
 * */

 exports.units = asyncHandler(async (req, res, next) => {

  const activeShift = await Shift.find({ active: true });

  console.log(activeShift);

  return res
    .status(200)
    .render('pages/shifts/units', {
      title: 'add units',
      development: isDev,
    });
});