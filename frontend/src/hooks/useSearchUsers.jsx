import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useSearchUsers = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setUsers(data.users);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      searchUsers();
    }
  }, [query]);

  return { loading, query, setQuery, users, searchUsers };
};

export default useSearchUsers;
