import express from "express";

import { getGame } from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGame);

export default router;
