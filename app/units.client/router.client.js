const { Router } = require('express');
const clientRouter = Router();
const { homeRouter } = require('./home');
const { shiftRouter } = require('./shifts');

// middleware 
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

clientRouter.use('/', homeRouter);
clientRouter.use('/shifts', shiftRouter);

// export
module.exports = clientRouter;