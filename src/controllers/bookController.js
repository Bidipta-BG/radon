const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const authorController = require("../controllers/authorController");
const publisherController = require("../controllers/publisherController");
const publisherModel = require("../models/publisherModel");

const getBook = async function (req, res) {
  let searchBook = await bookModel
    .find()
    .populate("author")
    .populate("publisher");
  res.send({ data: searchBook });
};

const createBook = async function (req, res) {
  let findauthorId = await authorModel.find();
  console.log(findauthorId);

  let findPublisherId = await publisherModel.find();
  if ("author" in req.body) {
    if ("publisher" in req.body) {
      for (i = 0; i < findauthorId.length; i++) {
        if (req.body.author == findauthorId[i]._id) {
          for (j = 0; j < findPublisherId.length; j++) {
            if (req.body.publisher == findPublisherId[j]._id) {
              return res.send(await bookModel.create(req.body));
            }
          }
          return res.send("Please enter a valid publisherid");
        }
      }
      return res.send("Please enter a valid authorid");
    } else {
      return res.send("publisherid must be entered");
    }
  } else {
    return res.send("authorid must be entered");
  }
};

const hardCoverUpdate = async function (req, res) {
  const searchPublisher = await publisherModel.find();
  for (let i = 0; i < searchPublisher.length; i++) {
    if (
      searchPublisher[i].name == "Penguin" ||
      searchPublisher[i].name == "HarperCollins"
    ) {
      await bookModel.updateMany(
        { publisher: searchPublisher[i]._id },
        { $set: { isHardCover: true } }
      );
    }
  }
  res.send("Successfully Updated");
};

const priceUpdate = async function (req, res) {
  await bookModel.updateMany(
    { ratings: { $gt: 3.5 } },
    { $set: { price: { $sum: 10 } } }
  );
  res.send("updated");
};

module.exports.createBook = createBook;
module.exports.getBook = getBook;
module.exports.hardCoverUpdate = hardCoverUpdate;
module.exports.priceUpdate = priceUpdate;
