import express from "express";
import mongoose from "mongoose";

import Kimchi from "../models/kimchi.js";

const router = express.Router();

// @desc   Get kimchi model
// @route  GET
// @access
export const getKimches = async (req, res) => {
  try {
    const kimches = await Kimchi.find();
    res.status(200).json({ message: "good to go" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
