import React, { useState, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificatonSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { socket } = useSocketContext();
  const {
    messages,
    setMessages,
    selectedConversation,
    setSelectedConversation,
    addNotification,
  } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificatonSound);
      sound.play();
      setMessages([...messages, newMessage]);
      addNotification(selectedConversation);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, setMessages, messages, addNotification, selectedConversation]);
};

export default useListenMessages;
