const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")

router.post("/createbook", UserController.createBook)

router.get("/getbook", UserController.getAllBooks)

module.exports = router;