const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('./authors');
const { bookRouter } = require('./books');
const { photoRouter } = require('./photos');
const { shiftRouter } = require('./shifts');

// middleware 
//const { checkAuthClient } = require('../middleware');
//apiRouter.use(checkAuthClient);

// routes
apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', bookRouter);
apiRouter.use('/photos', photoRouter);
apiRouter.use('/shifts', shiftRouter);

// export
module.exports = apiRouter;