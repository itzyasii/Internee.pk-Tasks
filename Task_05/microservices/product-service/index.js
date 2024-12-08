const express = require("express");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  res.json({ id: 1, Productname: "Pepsi", id: 2, Productname: "Coca-cola" });
});

const PORT = 5001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`The Server is running on PORT ${PORT}`);
});
