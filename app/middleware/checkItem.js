const checkItem = ($model) => async (req, res, next) => {

    // check if item exists
    let item = await $model.findById(req.params.id);

    if(!item) {

      return res
        .status(404)
        .json({
          success: false,
          message: 'Item not found'
        });

    } else {

      res.check_results = {
        success: true,
        message: 'Item found.',
        item
      }

      return next();

    }

}

module.exports = checkItem;