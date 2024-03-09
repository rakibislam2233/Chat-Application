import { Conversation } from "../Conversation/conversation.model.js";
import { Message } from "./message.model.js";

const sendMessage = async (req, res, next) => {
  try {
    const { receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;
    const stringSenderId = senderId.toString();
    if (receiverId === stringSenderId) {
      return res.status(400).json({
        success: false,
        message: "You can not  send a message to yourself",
      });
    }
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({ senderId, receiverId, message });
    if (newMessage) {
      conversation.messages.push(newMessage?.id);
    }
    await conversation.save();
    res.status(200).json({
      success: true,
      message: "Message send successfully",
      data: newMessage,
    });
  } catch (error) {
    next(error);
  }
};

export const getMessage = async (req, res, next) => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json({
      success: true,
      message: "Message retrived successfully",
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};
export const messageController = {
  sendMessage,
  getMessage,
};
