import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const conversationRef = useRef(null);

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const shakeClass =
    selectedConversation && selectedConversation.shouldShake ? "shake" : "";

  const { newMessage } = useConversation();

  useEffect(() => {
    if (isSelected && conversationRef.current) {
      conversationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isSelected]);

  return (
    <>
      <div
        ref={conversationRef}
        className={`flex gap-2 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pointer ${shakeClass} ${
          isSelected ? "bg-green-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">@{conversation.username}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
