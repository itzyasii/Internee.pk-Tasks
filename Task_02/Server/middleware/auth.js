// middlewares/auth.js
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Check if the Authorization header exists
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  // Replace "Bearer " and retrieve the token
  const token = authHeader.replace("Bearer ", "");

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = auth;
