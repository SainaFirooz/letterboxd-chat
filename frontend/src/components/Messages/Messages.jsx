import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-y-scroll no-scrollbar p-20 py-2 flex flex-col justify-between">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
