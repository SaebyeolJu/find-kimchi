import express from "express";

import { searchKimchi } from "../controllers/kimchesController.js";

const router = express.Router();

router.get("/:name", searchKimchi);

export default router;
