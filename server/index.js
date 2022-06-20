import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import kimchiRoutes from "./routes/kimchiRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/kimchi", kimchiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
