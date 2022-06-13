const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const userController= require("../controllers/userController")
const freeUserCheck = require("../middleware/freeUserCheck");
const orderController = require("../controllers/orderController");
const userAndProductCheck = require("../middleware/userAndProductValidate");





router.post("/createproduct", productController.createProduct);

router.post("/createuser", freeUserCheck.freeUserCheckMW, userController.createUser);

router.post("/createorder",freeUserCheck.freeUserCheckMW, userAndProductCheck.userAndProductAvailable, orderController.createOrder);



module.exports = router;