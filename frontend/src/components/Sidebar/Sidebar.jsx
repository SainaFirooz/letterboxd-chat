import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  const [users, setUsers] = useState([]);

  return (
    <div className="border-r  border-headerColor p-4 flex flex-col justify-between ml-60 bg-form rounded-lg mt-20 w-[280px] sm:ml-5 lg:ml-80">
      <div className="overflow-y-scroll no-scrollbar ">
        <SearchInput setUsers={setUsers} />
        <div className="divider px-3"> </div>
        <Conversations className="mb-4" users={users} />
      </div>
      <div className="flex items-center">
        <LogoutButton />

        <div className="flex flex-col items-center ml-40 m-2">
          <img
            src={authUser.profilePic}
            alt="Logged in user"
            className="h-10 w-10 rounded-full ml-2"
          />
          <span className="mt-0 text-footerLink">@{authUser.username}</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
