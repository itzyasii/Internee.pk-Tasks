const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");


require('dotenv').config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer );


io.on("connection", (socket) => {
    console.log(socket.id);
  });





httpServer.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}`);
    
} )

