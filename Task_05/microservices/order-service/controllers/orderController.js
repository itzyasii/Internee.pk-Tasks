const Order = require("../models/Order");
const axios = require("axios");

exports.createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Validate user
    const user = await axios.get(`http://localhost:5001/api/users/${userId}`);
    if (!user.data) return res.status(404).json({ error: "User not found" });

    // Validate product
    const product = await axios.get(`http://localhost:5002/api/products/${productId}`);
    if (!product.data) return res.status(404).json({ error: "Product not found" });

    // Create order
    const order = await Order.create({ userId, productId, quantity });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
