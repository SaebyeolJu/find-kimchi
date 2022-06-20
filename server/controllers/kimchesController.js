import express from "express";
import mongoose from "mongoose";

import Kimchi from "../models/kimchi.js";

// @desc   Get kimchi model
// @route  GET /api/kimches
// @access

// Search
// 해당하는 김치 1개만 불러옴
export const getKimches = async (req, res) => {
  const { name } = req.query;
  try {
    const kimches = await Kimchi.find();
    res.status(200).json({ data: kimches });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const searchKimchi = async (req, res) => {
  const name = req.params.name;

  try {
    const kimchi = await Kimchi.find({ name: name });
    res.status(200).json({ data: kimchi });
    console.log(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Game에 사용
// 해당하는 김치 랜덤갯수 불러옴
export const getGame = async (req, res) => {
  try {
    const T_kimches = await Kimchi.find({ isKimchi: "TRUE" });
    const N_kimches = await Kimchi.find({ isKimchi: "FALSE" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
