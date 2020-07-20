const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    price: {
      type: Number,
      required: true,
    },
    isHot: {
      type: Boolean,
      required: true,
    },
    iceChangeable: {
      type: Boolean,
      required: true,
    },
    sugarChangeable: {
      type: Boolean,
      required: true,
    },
    iceRemovable: {
      type: Boolean,
      required: true,
    },
    canHot: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
