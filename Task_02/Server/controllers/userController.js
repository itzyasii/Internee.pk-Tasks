// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Renamed for consistency
const jwt = require("jsonwebtoken");

// Register New User
exports.register = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "User registration failed" });
  }
};

// Login User and Return JWT
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, name: user.name, username: user.username, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send back the token along with user details (excluding password)
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// Get User
// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password"); // Exclude password
//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to get user" });
//   }
// };

// Update User
// exports.updateUser = async (req, res) => {
//   try {
//     // Optionally hash the password if it's being updated
//     if (req.body.password) {
//       req.body.password = await bcrypt.hash(req.body.password, 10);
//     }

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       select: "-password", // Exclude password
//     });
//     if (!updatedUser) return res.status(404).json({ error: "User not found" });
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update user" });
//   }
// };

// // Delete User
// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json({ message: "User deleted" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// };
