const checkItem = ($model, $errorResponse) => async (req, res, next) => {

  //check if item is found
  let item = await $model.findById(req.params.id);

  try {
    if(!item) {
      const error = new Error('Item was not found.');
      error.status = 404;
      error.response = $errorResponse;
      throw error;
    } else {
      res.item_result = {
        success: true,
        message: 'Item has been found.',
        data: item
      };    
      return next();
    }   
  } catch(error) {
    return next(error);
  }

  // if(!item) {
  //   const error = new Error('Item was not found.');
  //   error.status = 404;
  //   error.response = 'json';
  //   throw error;
  // } else {
  //   return next();
  // }

}

module.exports = checkItem;