import express from "express";

import { getComment } from "../controllers/commentsController.js";

const router = express.Router();

router.get("/", getComment);
// router.post("/", );

export default router;
