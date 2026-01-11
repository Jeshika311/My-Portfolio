import Message from "../models/messageModel.js";

// Controller to send a message
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, message) are required",
      });
    }

    const newMessage = await Message.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};

// Controller to get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};
