import { Conversation } from "./conversation.model.js";

const getConversation = async (req, res) => {
  try {
    const senderId = req.user._id;

    const conversations = await Conversation.find({
      participants: senderId,
    })
      .populate({
        path: "participants",
        select: "-password",
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "messages",
        options: { sort: { createdAt: -1 } },
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Conversations retrieved successfully",
      data: conversations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching conversations",
      error: error.message,
    });
  }
};

export const conversationController = { getConversation };
