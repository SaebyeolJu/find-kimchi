import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

// Search 기능 api
// @desc   Get kimchi
// @route  GET /api/kimchi

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
