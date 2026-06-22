import { Product } from "../models/Product.js";

const productController = async (req, res) => {
  try {
    const { cursor, category } = req.query;

    let products;

    if (cursor) {
      products = await Product.find({
        category: category || { $exists: true },
        createdAt: {
          $lt: cursor,
        },
      })
        .sort({ createdAt: -1 })
        .limit(20);
    } else {
      products = await Product.find({
        category: category || { $exists: true },
      })
        .sort({ createdAt: -1 })
        .limit(20);
    }

    const nextCursor =
      products.length > 0 ? products[products.length - 1].createdAt : null;

    return res.status(200).json({
      products,
      nextCursor,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default productController;
