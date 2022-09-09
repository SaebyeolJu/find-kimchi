import mongoose from "mongoose";

/**
 * @description Kimchi Schema - 김치의 정보 저장. game page와 search 페이지에서 사용됨
 */
const kimchiSchema = mongoose.Schema({
  name: String,
  eng_name: [String],
  img_link: String,
  material_link: String,
  source: String,
  isKimchi: String,
  ingredient_img: String,
  comment: String,
  eng_comment: String,
});

const Kimchi = mongoose.model("Kimchi", kimchiSchema);

export default Kimchi;
