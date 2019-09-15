import mongoose from "mongoose";

/**
 * Initialize the user schema
 */
const messageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Message = mongoose.model("messages", messageSchema);

export default Message;
