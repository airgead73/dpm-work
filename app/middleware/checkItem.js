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
        data: item
      };    
      return next();
    }   
  } catch(error) {
    return next(error);
  }

}

module.exports = checkItem;