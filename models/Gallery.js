const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {

    gallery: {
      id: String,
      imageUrl: String,
      imageTitle: String,
      uploaded: { type: Date, default: Date.now},
    }
  },
);

module.exports = mongoose.model("Gallery", GallerySchema);
