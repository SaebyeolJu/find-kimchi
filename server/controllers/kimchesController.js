import express from "express";
import mongoose from "mongoose";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

// @desc   Get kimchi model
// @route  GET
// @access

// Search
// 해당하는 김치 1개만 불러옴
export const getKimches = async (req, res) => {
  const { name } = req.query;

  try {
    const kimches = await Kimchi.find({ name });
    res.status(200).json({ data: kimches });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Game에 사용
// 해당하는 김치 랜덤갯수 불러옴
