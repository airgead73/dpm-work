const { isDev } = require('../config/env');
const handleError = (err, req, res, next) => {
  let statusCode = err.status || res.statusCode || 500;
  if(err.name === 'CastError') {
    err.message = 'Item cannot be found.'
    statusCode = 404
  }

  const errorObject = {
    success: false,
    message: err.message,
    status: statusCode,
    name: err.name,
    accept: req.header('Accept') || err.accept || null,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  }

  if(errorObject.accept === 'html') {
    return res
      .status(statusCode)
      .render('pages/error', {
        success: false,
        status: statusCode,
        message: err.message,
        title: 'Error',
        main: 'main--error'
      })
  } else {
    return res
      .status(statusCode)
      .json(errorObject);
  }

  
}

module.exports = handleError;