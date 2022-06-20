import express from "express";

import { getKimches, searchKimchi } from "../controllers/kimchesController.js";

const router = express.Router();

router.get("/", getKimches);
router.get("/:name", searchKimchi);

export default router;
