const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    description: {
      type: String,
      required: true,
      maxlength: 650
    },
    pictureUrl: { type: String },
    year: { type: Number },
    country: { type: String },
    quote: { type: String },
    publisher: { type: Schema.Types.ObjectId, ref: "User" },
    mood1: { type: Array },
    mood2: { type: Array }
  },
  {
    timestamps: true
  }
);

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
