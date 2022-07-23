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
shiftRouter.route('/:id').get(checkItem(Shift), detail);
shiftRouter.route('/:id/update').get(checkItem(Shift), update);
shiftRouter.route('/:id/items').get(checkItem(Shift), units);

// export
module.exports = shiftRouter;
