const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const tokenAuthenticator = async function (req, res, next) {


  try {

    let token = req.headers["x-Auth-token"];
    if (!token) {
      token = req.headers["x-auth-token"];
    }

    if (!token) {
      return res.status(401).send({msg: "token must be present"});
    }

    let decodedToken = jwt.verify(token, "functionup-radon-1");
    if (!decodedToken) {
      return res.status(401).send({msg: "AUTHENTICATION MISSING"});
    }

    let userToBeModified = decodedToken.userId
    let userIdEntered = req.params.userId
    if (userToBeModified != userIdEntered) {
      return res.status(403).send({msg: "NOT AUTHENTICATED OR FOBIDDEN"})
    } else {
      next();
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({
      msg: "SERVER SIDE ERROR : ",
      error: err.message
    })
  }
};

module.exports.tokenAuthenticator = tokenAuthenticator;