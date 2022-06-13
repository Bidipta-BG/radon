const orderModel = require("../models/ordermodel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {

  let productDetail = await productModel.findById(req.body.productId)
  let userDetails = await userModel.findById(req.body.userId);
  let order= req.body

let isFreeUser = req.headers.isfreeappuser;
  if(isFreeUser == 'true'){
    order.amount = 0;
    order.body.isFreeAppUser= true
    await orderModel.create(order);
    res.send(order)
  }
  else if(isFreeUser == 'false' && userDetails.balance >= productDetail.price){
    let productPrice = productDetail.price
    order.amount = productPrice
    let remBalance = userDetails.balance - productPrice
    await userModel.updateMany(
      { _id: order.userId },
      { $set: { balance: remBalance, isFreeUser: false } }
    );
    await orderModel.create(order)
      res.send("order succefully saved in DB");
  }
  else {res.send("You have insufficient balance")}

};


module.exports.createOrder = createOrder;