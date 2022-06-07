const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let bookData= await bookModel.create(req.body)
    res.send(bookData)
}
const createAuthor= async function (req, res) {
    let authorData= await authorModel.create(req.body)
    res.send(authorData)
}

const booksCB = async function (req, res) {
    let CBid= await authorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let x= await bookModel.find({author_id:CBid[0].author_id})
    res.send(x)
}

const bookAuthor = async function (req, res) {
    let updatePrice= await bookModel.findOneAndUpdate({name:"Two states"}, {$set:{prices:100}},{new:true})
    let authorName= await authorModel.find({author_id:updatePrice.author_id}).select({author_name:1, _id:0})
    let price= updatePrice.price
    res.send({authorName, price})
}



const bookbyPrice = async function (req, res) {
    let authorId= await bookModel.find({price: {$gt:50, $lte:100}}).select({author_id:1, _id:0})
    // authorId.map(await authorModel.find(authorId[0]).select({author_name:1, _id:0}))
    let authorName=await authorModel.find(authorId[2]).select({author_name:1, _id:0})
    res.send(authorName)
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.booksCB= booksCB
module.exports.bookAuthor= bookAuthor
module.exports.bookbyPrice= bookbyPrice