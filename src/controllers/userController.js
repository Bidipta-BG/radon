const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({
    msg: savedData
  })
}
  catch (err){
  res.status(500).send({msg: "SERVER SIDE ERROR : ", error: err.message})
}
};




const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({
    emailId: userName,
    password: password
  });
  if (!user) {
    return res.status(404).send({
      msg: "PAGE NOT FOUND", error: err.message
    });
  } else {
    let token = jwt.sign({
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp"
      },
      "functionup-radon-1"
    );
    res.setHeader("x-auth-token", token);
    res.send({
      status: true,
      token: token
    });
  }
}
catch (err){
  res.status(500).send({msg: "SERVER SIDE ERROR : ", error: err.message})
}
};




const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.status(404).send({
      msg: "PAGE NOT FOUND", error: err.message
    })
  } else {
    res.send({
      status: true,
      data: userDetails
    })
  }
}
  catch (err){
  res.status(500).send({msg:"SERVER SIDE ERROR : ", error: err.message})
}
};




const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send({
      msg: "PAGE NOT FOUND", error: err.message});
  } else {
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({
        _id: userId
      },
      userData, {
        new: true
      }
    );
    res.send({
      status: updatedUser
    });
  }
}
  catch (err){
  res.status(500).send({msg: "SERVER SIDE ERROR : ", error: err.message})
}
};





const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;

  await userModel.findByIdAndUpdate(userId, {
    isDeleted: 'true'
  });
  res.send({
    Message: "isDelete successfully updated"
  })
}
  catch (err){
  res.status(500).send({msg: "SERVER SIDE ERROR : ", error: err.message})
}
};





module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;