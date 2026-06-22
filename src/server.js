import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import router from "./routes/product.routes.js";
//import seedProducts from "./seed/seedProducts.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

//await seedProducts(); already seeded products, so commenting this line to avoid reseeding on every server start

// Routes
app.use("/api/v1", router);
app.listen(process.env.PORT, () => console.log("Server is started..."));
