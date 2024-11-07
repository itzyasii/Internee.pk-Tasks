const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConnection");
const userRoutes = require('./routes/userRoutes');


require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
connectDB();



const PORT = process.env.PORT;

app.use("api/users", userRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})