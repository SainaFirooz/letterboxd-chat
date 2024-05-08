import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/Messages/MessageContainer";

const ChatPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="main-content py-5">
          <Header />

          <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backgrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <MessageContainer />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ChatPage;
