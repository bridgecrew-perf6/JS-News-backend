const { Schema, model } = require("mongoose");

const topstoriesSchema = new Schema(
  {
    by: { type: String, required: true },
    descendants: { type: Number, required: true },
    id: { type: Number, required: true },
    score: { type: Number, required: true },
    time: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("topstories", topstoriesSchema);