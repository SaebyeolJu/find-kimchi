import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import kimchiRoutes from "./routes/kimchiRoutes.js";
import { DB_CONNECTION_URL } from "./config.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/kimchi", kimchiRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
