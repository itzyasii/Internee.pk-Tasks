const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("./config/socketConfig");
const connectDB = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const server = http.createServer(app);
connectDB();

const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  socket(server);
  console.log(`Server is running on port ${PORT}`);
});
