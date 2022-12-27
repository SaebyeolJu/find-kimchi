import { useNavigate } from "react-router-dom";

/**
 * @returns Report 페이지로 이동하는 링크 제공
 */
const ReportLink = () => {
  let navigate = useNavigate();
  return (
    <a
      onClick={() => {
        navigate("/report");
      }}
      className="report__link"
    >
      제보하기
    </a>
  );
};

export default ReportLink;
