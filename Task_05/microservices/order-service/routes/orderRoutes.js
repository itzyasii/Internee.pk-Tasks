const express = require("express");
const { createOrder, getOrdersByUserId } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/:userId", getOrdersByUserId);

module.exports = router;
