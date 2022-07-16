const { Router } = require('express');
const apiRouter = Router();
const { shiftRouter } = require('./shifts');

// middleware 
//const { checkAuthClient } = require('../middleware');
//apiRouter.use(checkAuthClient);

// routes
apiRouter.use('/shifts', shiftRouter);

// export
module.exports = apiRouter;