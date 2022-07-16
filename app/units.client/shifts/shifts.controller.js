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
      success,
      count,
      shifts,
      development: isDev
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
  return res
    .status(200)
    .render('pages/shifts/detail', {
      title: 'shift detail',
      development: isDev
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
      title: 'shifts',
      development: isDev
    });
});
