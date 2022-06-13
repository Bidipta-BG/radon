const mongoose = require("mongoose");

const newUser = new mongoose.Schema(
  {
    name: String,
    balance: Number,
    address: String,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    isFreeAppUser: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", newUser);
