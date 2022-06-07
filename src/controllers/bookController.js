const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let bookData= await BookModel.create(data)
    res.send(bookData)
}

const bookList = async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send(allBooks)
}

const getBooksYear = async function (req, res) {
    let searchedYear= req.body.year
    let booksByYear= await BookModel.find({year: searchedYear})
    res.send(booksByYear)
}

const getParticularBooks = async function (req, res) {
    let filter= req.body
    filterBooks= await BookModel.find(filter)
    res.send(filterBooks)
}

const getXINRBooks = async function (req, res) {
    let INRBooks= await BookModel.find({"prices.indianPrice": {$in:["100INR", "200INR", "500INR"]}})
    res.send(INRBooks)
}


const getRandomBooks = async function (req, res) {
    let randBoooks= await BookModel.find({$or:[{stockAvailable:true}, {totalPages:{$gt:500}}]})
    res.send(randBoooks)
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksYear= getBooksYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks