const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be the data base's data structure
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    email: String,
    phone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
