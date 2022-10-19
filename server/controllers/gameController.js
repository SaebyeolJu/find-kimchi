import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

/**
 * @desc Get game data from DB(False / True 랜덤 개수)
 * @route  GET /api/game
 */
export const getGame = async (req, res) => {
  const T_randNum = Math.floor(Math.random() * 10) + 1;
  const F_randNum = 11 - T_randNum;

  try {
    const GameInfo = await Kimchi.aggregate([
      {
        $facet: {
          t_kimches: [
            { $match: { is_kimchi: true } },
            { $sample: { size: T_randNum } },
            {
              $addFields: {
                kor_names: { $split: ["$kor_name", ", "] },
                eng_names: { $split: ["$eng_name", ", "] },
                ingredient_categories: {
                  $split: ["$ingredient_category", ", "],
                },
              },
            },
          ],
          f_kimches: [
            { $match: { is_kimchi: false } },
            { $sample: { size: F_randNum } },
            {
              $addFields: {
                kor_names: { $split: ["$kor_name", ", "] },
                eng_names: { $split: ["$eng_name", ", "] },
                ingredient_categories: {
                  $split: ["$ingredient_category", ", "],
                },
              },
            },
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

export default router;
