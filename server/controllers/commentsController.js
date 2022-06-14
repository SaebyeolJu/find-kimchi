import Comment from "../models/comment";

export const createComment = async (req, res) => {
  const comment = req.body;

  const newComment = new Comment(comment);
  try {
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
