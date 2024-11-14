const Messages = require("../models/Messages");
const mongoose = require("mongoose");

const saveMessage = async (data) => {
  const formattedData = {
    message: data.message,
    sender: {
      _id: data?.sender?.userId,
      name: data?.sender?.name,
      email: data?.sender?.email,
      username: data?.sender?.username,
    },
    receiver: {
      _id: data?.receiver?.userId,
      name: data?.receiver?.name,
      email: data?.receiver?.email,
      username: data?.receiver?.username,
    },
  };

  try {
    const saveMsg = new Messages(formattedData);
    await saveMsg.save();
    return saveMsg;
  } catch (error) {
    console.log(error);
  }
};

const getMessages = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(404).json({ error: "Enter valid ID" });
    }
    const allMessages = await Messages.find({
      $or: [{ "sender._id": id }, { "receiver._id": id }],
    });

    return res.status(200).send({
      data: allMessages,
      message: "All messages fetched",
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    if (!messageId) return res.status(400).send({ msg: "Invalid Message ID" });

    const deletedMsg = await Messages.findByIdAndDelete(messageId);

    if (!deletedMsg) {
      return res.status(404).send({ msg: "Message not found" });
    }

    res.status(200).send({
      data: deletedMsg,
      msg: "Message successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  saveMessage,
  getMessages,
  deleteMessage,
};
