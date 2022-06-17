const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
// const tokenAuth = require("../middlewares/tokenAuthentication")




router.get("/getDistrict", userController.getDistrict  )

router.get("/wheatherdata", userController.getWheather)

router.get("/getlondontemp",userController.getLondonTemp)

router.get("/citywheather",userController.citiesWheather)

router.get("/getmemes",userController.getAllMemes)

router.post("/memescreator",userController.memesCreator)

// router.delete("/users/:userId",tokenAuth.tokenAuthenticator, userController.deleteUser);


module.exports = router;