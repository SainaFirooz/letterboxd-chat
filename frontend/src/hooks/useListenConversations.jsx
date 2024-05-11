// import React, { useEffect } from "react";
// import { useSocketContext } from "../context/SocketContext";
// import useConversation from "../zustand/useConversation";
// import notificatonSound from "../assets/sounds/notification.mp3";

// const useListenConversations = () => {
//   const { socket } = useSocketContext();
//   const { conversations, setConversations } = useConversation();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       setConversations((prevConversations) => {
//         return prevConversations.map((conversation) =>
//           conversation.id === newMessage.conversationId
//             ? { ...conversation, newMessage: true }
//             : conversation
//         );
//       });
//     });

//     return () => {
//       socket.off("newMessage");
//     };
//   }, [socket, setConversations]);
// };

// export default useListenConversations;
