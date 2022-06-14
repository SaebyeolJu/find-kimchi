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
