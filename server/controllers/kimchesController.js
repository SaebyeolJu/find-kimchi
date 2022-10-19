import express from "express";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

/**
 *
 *  @desc   해당하는 kimchi data를 받아와 client에 보내줌
 *  @route  GET /api/kimchi
 */
// export const searchKimchi = async (req, res) => {
//   var check_eng = /[a-zA-Z]/;
//   var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

//   const name = req.params.name;
//   try {
//     if (check_eng.test(name)) {
//       const kimchi = await Kimchi.find({ eng_name: name });
//       res.status(200).json({ data: kimchi });
//     } else if (check_kor.test(name)) {
//       const kimchi = await Kimchi.find({ kor_name: name });
//       res.status(200).json({ data: kimchi });
//     }
//     return;
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const searchKimchi = async (req, res) => {
  var check_eng = /[a-zA-Z]/;
  var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  const name = req.params.name.replace(" ", "");
  try {
    if (check_eng.test(name)) {
      const kimchi = await Kimchi.aggregate([
        {
          $addFields: {
            eng_names: { $split: ["$eng_name", ", "] },
            ingredient_categories: { $split: ["$ingredient_category", ", "] },
          },
        },
        { $match: { eng_names: name } },
      ]);

      res.status(200).json({ data: kimchi });
    } else if (check_kor.test(name)) {
      const kimchi = await Kimchi.aggregate([
        {
          $addFields: {
            kor_names: { $split: ["$kor_name", ", "] },
            ingredient_categories: { $split: ["$ingredient_category", ", "] },
          },
        },
        {
          $match: { kor_names: name },
        },
      ]);

      res.status(200).json({ data: kimchi });
    }
    return;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
