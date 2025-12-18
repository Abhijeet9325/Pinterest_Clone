const mongoose = require("mongoose");
const plm = require("passport-local-mongoose").default || require("passport-local-mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    dp: {
      type: String, // URL of profile picture
      default: "",
    },
    profileImage:String
    ,
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }],
  },
  { timestamps: true }
);
userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);
