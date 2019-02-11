const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    description: {
      type: String,
      required: true,
      minlength: 100,
      maxlength: 650
    },
    pictureUrl: { type: String },
    year: { type: String },
    country: { type: String, required: true },
    quote: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
