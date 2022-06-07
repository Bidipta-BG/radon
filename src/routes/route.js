const express = require('express');
const router = express.Router();
const UserController= require("../controllers/bookController")

router.post("/createbook", UserController.createBook)

router.get("/booklist", UserController.bookList)

router.post("/booksbyyear", UserController.getBooksYear)

router.post("/getparticularbook", UserController.getParticularBooks)

router.get("/booksinr", UserController.getXINRBooks)

router.get("/randbooks", UserController.getRandomBooks)

module.exports = router;