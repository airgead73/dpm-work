const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../../units.api/shifts/shift');

// controllers
const { dashboard, add, detail, update, units } = require('./shifts.controller');

// middleware
const { checkItem, handleQuery } = require('../../middleware');

//routes
shiftRouter.route('/').get(handleQuery(Shift), dashboard);
shiftRouter.route('/add').get(add);
shiftRouter.route('/update/:id').get(checkItem(Shift), update);
shiftRouter.route('/units/:id').get(checkItem(Shift), units);
shiftRouter.route('/:id').get(checkItem(Shift), detail);

// export
module.exports = shiftRouter;
