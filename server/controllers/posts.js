import Kimchi from "../models/kimchi.js";

// @desc   Get kimchi model
// @route  GET
// @access
export const getKimchi = async (req, res) => {
  try {
    const kimches = await Kimchi.find();
    console.log(kimches);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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
