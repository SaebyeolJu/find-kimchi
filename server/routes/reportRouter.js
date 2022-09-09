import express from "express";

import { postReport } from "../controllers/reportController.js";

const router = express.Router();

router.post("/", postReport);

export default router;
