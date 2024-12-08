const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});     
const PORT = 5002 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`The Server is running on PORT ${PORT}`);
});
