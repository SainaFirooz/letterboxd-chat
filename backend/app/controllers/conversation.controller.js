import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const deleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const conversation = await Conversation.findById(id);

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    if (!conversation.participants) {
      return res.status(400).json({ message: "Invalid conversation data" });
    }

    if (!conversation.participants.includes(userId)) {
      return res.status(403).json({
        message: "You do not have permission to delete this conversation",
      });
    }

    await Conversation.findByIdAndDelete(id);
    res.status(200).json({ message: "Conversation deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the conversation." });
  }
};

export { deleteConversation };
