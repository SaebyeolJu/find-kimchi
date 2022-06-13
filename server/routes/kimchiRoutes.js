import express from "express";

import { getKimchi } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getKimchi);
// router.post("/", getSearch);

export default router;
