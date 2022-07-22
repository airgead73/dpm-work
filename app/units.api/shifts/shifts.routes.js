const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controllers
const { create, read, detail, update, remove, units, end } = require('./shifts.controller');

// middleware
const { validationRules, validate, checkItem } = require('../../middleware');
const { handleQuery } = require('../../middleware');

// routes
shiftRouter.route('/').get(handleQuery(Shift), read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/units/:id').put(checkItem(Shift, 'json'), units);
shiftRouter.route('/end/:id').put(checkItem(Shift, 'json'), end);
shiftRouter.route('/:id').get(checkItem(Shift, 'json'), detail).put(checkItem(Shift, 'json'), update).delete(checkItem(Shift, 'json'), remove);

// export
module.exports = shiftRouter;