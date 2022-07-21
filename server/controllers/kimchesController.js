import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

// Search 기능 api
// @desc   Get kimchi
// @route  GET /api/kimchi

// export const getKimchi = async (req, res) => {
//   try {
//     const kimchi = await Kimchi.find();
//     res.status(200).json(kimchi);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

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

// Game에 사용
// 해당하는 김치 랜덤갯수 불러옴
// export const getGame = async (req, res) => {
//   try {
//     const T_kimches = await Kimchi.find({ isKimchi: "TRUE" });
//     const N_kimches = await Kimchi.find({ isKimchi: "FALSE" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export default router;
