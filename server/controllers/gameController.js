import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

// Search 기능 api
// @desc   Get game
// @route  GET /api/game

// False / True DB 랜덤 갯수 불러옴
export const getGame = async (req, res) => {
  const T_randNum = Math.floor(Math.random() * 10) + 1;
  const F_randNum = 11 - T_randNum;

  try {
    const GameInfo = await Kimchi.aggregate([
      {
        $facet: {
          t_kimches: [
            { $match: { isKimchi: "TRUE" } },
            { $sample: { size: T_randNum } },
          ],
          f_kimches: [
            { $match: { isKimchi: "FALSE" } },
            { $sample: { size: F_randNum } },
          ],
        },
      },
    ]);
    res.status(200).json({ data: GameInfo });

    return;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const getGame = async (req, res) => {
//   const T_randNum = Math.floor(Math.random() * 11);
//   const F_randNum = 10 - T_randNum;

//   try {
//     const GameInfo = await Kimchi.aggregate([
//       { $match: { isKimchi: "TRUE" } },
//       { $sample: { size: T_randNum } },
//     ]);

//     const F_quiz = await Kimchi.aggregate([
//       { $match: { isKimchi: "FALSE" } },
//       { $sample: { size: T_randNum } },
//     ]);
//     res.status(200).json({ data: GameInfo });

//     return;
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export default router;
