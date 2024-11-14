const express = require("express");
const messageController = require("../controllers/messageController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/get/:id", auth, messageController.getMessages);
router.delete("/delete/:id", auth, messageController.deleteMessage);

module.exports = router;
