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
    let x= await bookModel.find({author_id:CBid[0].author_id}).select({name:1, _id:0})
    booksByCB=[]
    for(i=0; i<x.length; i++){
        booksByCB.push(x[i].name)
    }
    res.send(booksByCB)
}


const bookAuthor = async function (req, res) {
    let updatePrice= await bookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}},{new:true})
    let authorName= await authorModel.find({author_id:updatePrice.author_id}).select({author_name:1, _id:0})
    let price= updatePrice.price
    res.send({authorName, price})
}


const bookByPrice = async function (req, res) {
    let authorId= await bookModel.find({price: {$gt:50, $lte:100}}).select({author_id:1, name:1, _id:0})
    let authors=await authorModel.find().select({author_name:1, author_id:1, _id:0})
    let authorName= []
    for(let i=0; i<authorId.length; i++){
        for(let j=0; j<authors.length; j++){
            if(authorId[i].author_id===authors[j].author_id){
                authorName.push({'Author name':authors[j].author_name, 'Book Name':authorId[i].name})
            }
        }
    }
    res.send(authorName)
}


const bookById = async function (req, res) {
        let requestedIdObj = req.params
        let bookDB= await bookModel.find(requestedIdObj).select({name:1, _id:0})
        let booksName= []
        for(i=0; i<bookDB.length; i++){
            booksName.push(bookDB[i].name)
        }
    res.send(booksName)
}


const authorAbove50 = async function (req, res) {
        let authorNameAgeOver50= await authorModel.find({age:{$gt:50}}).select({author_name:1, age:1, _id:0})
        let authorOver50= await authorModel.find({age:{$gt:50}})
        let bookDB= await bookModel.find()
        let authorsList=[]
        for(let i=0; i<authorOver50.length; i++){
            for(let j=0; j<bookDB.length; j++){
                if((authorOver50[i].author_id === bookDB[j].author_id) && (bookDB[j].ratings > 4)){
                    authorsList.push(authorNameAgeOver50[i])
                }
            }
          }
        let uniqueAuthors = [...new Set(authorsList)]
        res.send(uniqueAuthors)
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.booksCB= booksCB
module.exports.bookAuthor= bookAuthor
module.exports.bookByPrice= bookByPrice
module.exports.bookById= bookById
module.exports.authorAbove50= authorAbove50

