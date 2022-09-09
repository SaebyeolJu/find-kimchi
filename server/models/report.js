import mongoose from "mongoose";

/**
 * @description Report Schema - 유저로 부터 받은 report의 내용
 */
const reportSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },

  // report 작성 날짜
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
