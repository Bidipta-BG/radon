const orderModel = require("../models/ordermodel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {

  let productDetail = await productModel.findById(req.body.productId);
  let userDetails = await userModel.findById(req.body.userId);
  let order= req.body

let isFreeUser = req.header.isFreeAppUser;
  if(isFreeUser == true){
    order.amount = 0;
    order.body.isFreeAppUser= true
  }
  else if((isFreeUser == false) && (userDetails.balance >= productDetail.price)){
    let productPrice = productDetail.price
    order.amount = productPrice
    let remBalance = userDetails.balance - productPrice
    await userModel.updateMany(
      { _id: order.userId },
      { $set: { balance: remBalance } }
    );
  }
  else {res.send("You have insufficient balance")}


  let orderCreated = await orderModel.create(order);
  res.send(orderCreated);
};


module.exports.createOrder = createOrder;