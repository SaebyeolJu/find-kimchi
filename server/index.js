import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import kimchiRoutes from "./routes/kimchiRoutes.js";

const app = express("/kimchi", kimchiRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB_CONNECTION_URL =
  "mongodb+srv://findKimchi:9dWmzEGiAnP4ndZW@cluster0.am3pl.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
