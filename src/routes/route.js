const express = require('express');
const router = express.Router();
const Controller= require("../controllers/controller")




router.get("/api1", Controller.api1)

router.get("/api2", Controller.api2)

router.get("/api3", Controller.api3)

router.post("/api4", Controller.api4)

router.post("/api5", Controller.api5)




module.exports = router;