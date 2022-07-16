const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controllers
const { create, read, detail, update, remove } = require('./authors.controller');

// middleware
const { validationRules, validate } = require('../../middleware');
const { handleQuery } = require('../../middleware');

// routes
shiftRouter.route('/').get(handleQuery(Shift), read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = shiftRouter;