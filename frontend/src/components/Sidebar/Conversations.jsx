import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { useSocketContext } from "../../context/SocketContext";
import useSearchUsers from "../../hooks/useSearchUsers";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { onlineUsers } = useSocketContext();
  const { notifications } = useConversation();

  const sortConversations = (conversations) => {
    return [...conversations].sort((a, b) => {
      const aIsOnline = onlineUsers.includes(a._id);
      const bIsOnline = onlineUsers.includes(b._id);

      if (aIsOnline && !bIsOnline) {
        return -1;
      }

      if (bIsOnline && !aIsOnline) {
        return 1;
      }

      return 0;
    });
  };

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {sortConversations(conversations).map((conversation, idx) => (
        <div key={conversation._id}>
          <Conversation
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
          {notifications.includes(conversation) && (
            <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              New Message!
            </span>
          )}
        </div>
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
