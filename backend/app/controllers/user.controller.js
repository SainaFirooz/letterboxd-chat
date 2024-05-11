import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const loggedInUser = await User.findById(loggedInUserId);

    console.log("Blocked users:", loggedInUser.blockedUsers);

    const filteredUsers = await User.find({
      _id: {
        $ne: loggedInUserId, // Not the logged-in user
        $nin: loggedInUser.blockedUsers, // Not in the logged-in user's blockedUsers list
      },
    }).select("-password");

    res.status(200).json({ users: filteredUsers });
    console.log("filteredUsers:", filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const getUsersForSidebar = async (req, res) => {
//   try {
//     const loggedInUserId = req.user._id;

//     const filteredUsers = await User.find({
//       _id: { $ne: loggedInUserId },
//     }).select("-password");

//     res.status(200).json({ users: filteredUsers });
//   } catch (error) {
//     console.log("Error in getUsersForSidebar controller: ", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const searchUsers = async (req, res) => {
  try {
    const { query } = req.body;
    console.log("query", query);

    const users = await User.find({
      $or: [
        { firstName: { $regex: query, $options: "i" } },
        // { lastName: { $regex: query, $options: "i" } },
        // { email: { $regex: query, $options: "i" } },
      ],
    }).select("-password");
    console.log("users", users);

    res.status(200).json({ users });
  } catch (error) {
    console.log("Error in searchUsers controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const blockUser = async (req, res) => {
  try {
    const blockUserId = req.body.blockUserId;
    const userId = req.user._id;

    console.log("blockUserId:", blockUserId);
    console.log("userId:", userId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the user to block
    const blockUser = await User.findById(blockUserId);
    console.log("blockUserId:", blockUserId);
    console.log("blockUser:", blockUser);
    if (!blockUser) {
      return res.status(404).json({ error: "User to block not found" });
    }

    // Add the blocked user to the user's blockedUsers list
    user.blockedUsers.push(blockUserId);
    await user.save();

    res.status(200).json({ message: "User blocked successfully" });
  } catch (error) {
    console.log("Error in blockUser controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
