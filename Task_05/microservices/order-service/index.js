const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Order Service DB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
