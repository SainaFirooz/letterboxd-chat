import React, { useState } from "react";
import toast from "react-hot-toast";

const useBlockUser = () => {
  const [loading, setLoading] = useState(false);

  const blockUser = async (userId, blockUserId) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/block", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, blockUserId }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, blockUser };
};

export default useBlockUser;
