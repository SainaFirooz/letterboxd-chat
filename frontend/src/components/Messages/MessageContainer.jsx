import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { AiFillWechat } from "react-icons/ai";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import useBlockUser from "../../hooks/useBlockUser";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { blockUser, loading } = useBlockUser();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className=" max-w-full flex flex-col  bg-form rounded-lg mt-20  w-[450px] sm:w-[400px]]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex justify-end bg-letterboxd px-4 py-2 mb-2 mt-3">
            <img
              src={selectedConversation.profilePic}
              alt="Logged in user"
              className="h-10 w-10 rounded-full ml-2"
            />
            <span className="mt-0 text-footerLink">
              @{selectedConversation.username}
            </span>
            <button
              onClick={() => blockUser(authUser, selectedConversation._id)}
              disabled={loading}
              className="btn btn-sm ml-auto"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
              {loading ? "Blocking..." : "Block"}
            </button>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username}</p>
        <p>Select a chat to start messaging</p>
        <AiFillWechat className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
