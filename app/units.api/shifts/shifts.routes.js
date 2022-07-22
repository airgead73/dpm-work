const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controllers
const { create, read, detail, update, remove, drop, units, end } = require('./shifts.controller');

// middleware
const { handleQuery, validationRules, validate, checkItem } = require('../../middleware');

// routes
shiftRouter.route('/').get(handleQuery(Shift), read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/drop').delete(drop);
shiftRouter.route('/units/:id').put(checkItem(Shift), units);
shiftRouter.route('/end/:id').put(checkItem(Shift), end);
shiftRouter.route('/:id').get(checkItem(Shift), detail).put(checkItem(Shift), update).delete(checkItem(Shift), remove);

// export
module.exports = shiftRouter;