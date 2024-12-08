const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Product Service DB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
