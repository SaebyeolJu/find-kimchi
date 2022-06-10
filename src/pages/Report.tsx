import React, { useState } from "react";
import ReportsLabel from "../components/ReportsLabel";

const Report = () => {
  const [form, setForm] = useState({
    kimchiName: "",
    link: "",
    memo: "",
  });

  const { kimchiName, link, memo } = form;

  const handleSubmit = (e: any) => {
    if (memo === "") {
      alert("입력을 확인해주세요");
    } else {
      alert("소중한 의견 감사합니다!");
    }
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
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
      <form className="reports" onSubmit={handleSubmit}>
        <h1 className="reports__title">제보하기</h1>
        <ReportsLabel label="김치 종류" />
        <input
          className="reports__input"
          value={form.kimchiName}
          placeholder="김치 이름을 남겨주세요"
          onChange={handleChange}
          name="kimchiName"
          type="text"
        />
        <ReportsLabel label="링크" />
        <input
          className="reports__input"
          value={form.link}
          placeholder="참고 링크를 남겨주세요"
          onChange={handleChange}
          name="link"
          type="text"
        />
        <ReportsLabel label="메모" />
        <input
          className="reports__input"
          value={form.memo}
          placeholder="메모를 남겨주세요"
          onChange={handleChange}
          name="memo"
          type="text"
        />
        <button className="btn" onClick={onReset} type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Report;
