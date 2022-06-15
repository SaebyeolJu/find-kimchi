import mongoose from "mongoose";

const kimchiSchema = mongoose.Schema({
  name: String,
  eng_name: String,
  img_link: String,
  source: String,
});

const Kimchi = mongoose.model("Kimchi", kimchiSchema);

export default Kimchi;
