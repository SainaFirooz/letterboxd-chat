import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
        },
        message: `Not  a valid email address!`,
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      validate: {
        validator: function (v) {
          return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(v);
        },
        message: `Not a valid password!`,
      },
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    blockedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Created at and updated at
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
