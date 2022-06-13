const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newOrder = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    isFreeAppUser: {
      type: Boolean,
      default: false,
    },
    date: Date
}, { timestamps: true });


module.exports = mongoose.model('Order', newOrder)