const { body } = require('express-validator');

const authorArray = [
  body('fname')
    .not().isEmpty()
    .withMessage('Please, provide a first name.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('lname')
    .not().isEmpty()
    .withMessage('Please, provide a last name.')
    .isLength({ max: 50 })    
    .trim()
    .escape(),
  body('dob')
  .not().isEmpty()
  .withMessage('Please, provide a last dob.')
  .escape(),
];

const shiftArray = [
  body('comments')
    .not().isEmpty()
    .withMessage('Please, provide comments.')
    .isLength({ max: 200 })
    .trim()
    .escape(),
  body('floor')
    .not().isEmpty()
    .withMessage('Please, provide a floor.')   
    .trim()
    .escape(),
  body('date')
  .not().isEmpty()
  .withMessage('Please, provide a date.')
  .escape(),
];


module.exports = {
  authorArray,
  shiftArray
}