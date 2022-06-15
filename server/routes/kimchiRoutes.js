import express from "express";

import { getKimches } from "../controllers/kimchesController.js";

const router = express.Router();

router.get("/", getKimches);

export default router;
