import mongoose from "mongoose";

const commentSchema = mongoose.schema({
  user_name: String,
  comment: String,
  date: Date,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
