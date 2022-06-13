import mongoose from "mongoose";

const kimchiSchema = mongoose.Schema({
  name: String,
  img_link: String,
  comment: String,
  answer: Boolean,
});

const Kimchi = mongoose.model("Kimchi", kimchiSchema);

export default Kimchi;
