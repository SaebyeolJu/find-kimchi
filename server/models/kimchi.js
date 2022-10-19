import mongoose from "mongoose";

/**
 * @description Kimchi Schema - 김치의 정보 저장. game page와 search 페이지에서 사용됨
 */
const kimchiSchema = mongoose.Schema({
  kor_name: [String],
  kimchi_title: String,
  score: Number,
  kor_comment: String,
  eng_name: [String],
  is_kimchi: Boolean,
  recipe_pic: String,
  recipe_link: String,
  ingredient_pic: String,
  ingredient_link: String,
  ingredient_category: [String],
  search_cnt: Number,
});

const Kimchi = mongoose.model("Kimchi", kimchiSchema);

export default Kimchi;
