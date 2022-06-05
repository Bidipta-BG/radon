const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let bookData= await UserModel.create(data)
    res.send(bookData)
}

const getAllBooks= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send(allBooks)
}

module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks