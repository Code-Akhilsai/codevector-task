import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
productSchema.index({ createdAt: -1 });
productSchema.index({ category: 1, createdAt: -1 });
export const Product = mongoose.model("Product", productSchema);
