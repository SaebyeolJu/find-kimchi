import mongoose from "mongoose";

const kimchiSchema = mongoose.Schema({
  name: String,
  eng_name: [String],
  img_link: String,
  material_link: String,
  source: String,
  isKimchi: Boolean,
  ingredient_img: String,
  comment: String,
  eng_comment: String,
});

const Kimchi = mongoose.model("Kimchi", kimchiSchema);

export default Kimchi;
