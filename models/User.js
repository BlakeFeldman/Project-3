const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleID: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Name is required.",
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is required.",
  },
  zip: {
    type: String,
    trim: true,
    required: "Zip is required.",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: String,
    trim: true,
    required: false,
  },
  interests: {
    type: String,
    trim: true,
    required: "Tell us why you are here."
  },
  services: {
    type: String,
    trim: true,
    required: "Tell us how you wish to get involved."
  },
  avatar: {
    type: String,
    trim: true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
