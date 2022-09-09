import express from "express";

import Report from "../models/report.js";

const router = express.Router();

/**
 * @desc Post user report to server
 * @route Post /api/report
 */

// post report to server
export const postReport = router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const report = await Report.create({
      message,
    });

    res.status(201).json({
      message: report.message,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid report data");
  }
});

// export const postReport = async (req, res) => {
//   const report = new Report({
//     message: req.body.message,
//   });

//   try {
//     const newReport = await report.save();
//     res.status(201).json(newReport);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export default router;
