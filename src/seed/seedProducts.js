import { Product } from "../models/Product.js";

const seedProducts = async () => {
  const products = [];
  const categories = ["Electronics", "Fashion", "Books", "Sports", "Home"];
  for (let i = 1; i <= 200000; i++) {
    products.push({
      product_name: `Product-${i}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: Math.floor(Math.random() * 5000) + 100,
      createdAt: new Date(Date.now() + i),
      updatedAt: new Date(Date.now() + i),
    });
  }
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products seeded successfully");
};

export default seedProducts;
