// middlewares/auth.js
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    // Passport's `isAuthenticated` checks if the user is logged in
    return next();
  }
  return res.status(401).json({ message: "Unauthorized. Please log in." });
};

module.exports = auth;