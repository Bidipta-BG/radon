const productModel = require("../models/productModel");
const userModel = require("../models/userModel");





const userAndProductAvailable = async function (req, res, next) {
  let enteredUserid= req.body.userId
  let isUserAvailable = await productModel.findById(enteredUserid);

  let enteredProductid= req.body.productId
  let isProductAvailable = await userModel.findById(enteredProductid);

  if(!enteredUserid && !enteredProductid){
    res.send({Error: "Please enter userid and productid"})
  }
  if (!isUserAvailable && !isProductAvailable) {
    res.send({
      Error: "Please enter a valid Product id and valid User id",
    });
  } else {
    next();
  }
};

module.exports.userAndProductAvailable = userAndProductAvailable;
