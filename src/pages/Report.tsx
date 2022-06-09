import React from "react";
import ReportsField from "../components/ReportsField";

const Report = () => {
  return (
    <div className="container">
      <form className="reports">
        <h1 className="reports__title">제보하기</h1>
        <ReportsField label="김치" />
        <ReportsField label="링크" />
        <ReportsField label="메모" />
        <button className="btn" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Report;
