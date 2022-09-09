import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

/**
 *
 *  @desc   해당하는 kimchi data를 받아와 client에 보내줌
 *  @route  GET /api/kimchi
 */
export const searchKimchi = async (req, res) => {
  const name = req.params.name;
  try {
    const kimchi = await Kimchi.find({ name: name });
    res.status(200).json({ data: kimchi });
    return;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
