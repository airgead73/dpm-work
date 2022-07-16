const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../../units.api/shifts/shift');

// controllers
const { dashboard, add, detail, update, items } = require('./shifts.controller');

// middleware
const { handleQuery } = require('../../middleware');

//routes
shiftRouter.route('/').get(handleQuery(Shift), dashboard);
shiftRouter.route('/add').get(add);
shiftRouter.route('/:id').get(detail);
shiftRouter.route('/:id/update').get(update);
shiftRouter.route('/:id/items').get(items);

// export
module.exports = shiftRouter;
