const checkItem = ($model) => async (req, res, next) => {

  try {
    const item = await $model.findById(req.params.id);
    if(!item) {
      const error = new Error('Item was not found.');
      error.status = 404;
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