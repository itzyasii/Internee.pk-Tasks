const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const ensureRole = require("../middleware/ensureRole");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", auth, ensureRole("admin"), userController.getUser);
router.put("/:id", auth, ensureRole("admin"), userController.updateUser);
router.delete("/:id", auth, ensureRole("admin"), userController.deleteUser);

module.exports = router;
