import React, { useState } from "react";
import ReportLabel from "../components/ReportLabel";
import NavigateBtn from "../components/NavigateBtn";

/**
 *
 * @returns - 게임 / 검색 결과에 대한 정정 의견을 남기는 페이지
 */
const Report = () => {
  const [form, setForm] = useState({
    kimchiName: "",
    link: "",
    memo: "",
  });

  const { kimchiName, link, memo } = form;

  const handleSubmit = (e: React.FormEvent) => {
    if (memo === "") {
      alert("입력을 확인해주세요");
    } else {
      alert("소중한 의견 감사합니다!");
    }
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onReset = () => {
    setForm({
      kimchiName: "",
      link: "",
      memo: "",
    });
  };

  return (
    <div className="container">
      <form className="report" onSubmit={handleSubmit}>
        <h1 className={["report__title", "txt-white"].join(" ")}>제보하기</h1>
        <ReportLabel label_title="김치 종류" />
        <input
          className="report__input"
          value={form.kimchiName}
          placeholder="김치 이름을 남겨주세요"
          onChange={handleChange}
          name="kimchiName"
          type="text"
        />
        <ReportLabel label_title="링크" />
        <input
          className="report__input"
          value={form.link}
          placeholder="참고 링크를 남겨주세요"
          onChange={handleChange}
          name="link"
          type="text"
        />
        <ReportLabel label_title="메모" />
        <input
          className="report__input"
          value={form.memo}
          placeholder="메모를 남겨주세요"
          onChange={handleChange}
          name="memo"
          type="text"
        />
        <NavigateBtn btn_txt="취소" btn_type="btn--prime" btn_dest="" />
        <button
          className={["btn--prime", "txt-white"].join(" ")}
          onClick={onReset}
          type="submit"
        >
          확인
        </button>
      </form>
    </div>
  );
};

export default Report;
