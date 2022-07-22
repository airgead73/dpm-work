const checkItem = ($model) => async (req, res, next) => {

  console.log('check item middleware');

  next();

}

module.exports = checkItem;