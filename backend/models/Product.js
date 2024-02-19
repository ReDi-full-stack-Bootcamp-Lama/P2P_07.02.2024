//Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { 
    type: mongoose.Schema.Types.ObjectId 
  },
  img: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
/*   slug: {
    type: String,
    required: true
  }, */
  price: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },

}, { versionKey: false });

const Product = mongoose.model("Product", productSchema);

export default Product;