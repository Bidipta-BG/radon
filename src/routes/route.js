const express = require('express');
const router = express.Router();
const UserController= require("../controllers/controller")

router.post("/createbook", UserController.createBook)

router.post("/createauthor", UserController.createAuthor)

router.get("/CBbooks", UserController.booksCB)

router.get("/booksbyauthor", UserController.bookAuthor)

router.get("/bookbyprice", UserController.bookbyPrice)


module.exports = router;