const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({ id: 1, name: "Yasir", id: 2, name: "susheel" });
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`The Server is running on PORT ${PORT}`);
});
