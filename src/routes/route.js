const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")




router.post("/createauthor", authorController.createAuthor)

router.post("/createpublisher", publisherController.createPublisher)

router.post("/createbook", bookController.createBook)

router.get("/getbook", bookController.getBook)

router.put("/hardcoverupdate", bookController.hardCoverUpdate)

router.put("/priceupdate", bookController.priceUpdate)





module.exports = router;