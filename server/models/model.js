const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
  },
  level: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("records", dataSchema);
