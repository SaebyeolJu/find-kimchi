import * as AiIcons from "react-icons/ai";

interface ReportLabelProps {
  label_title: string;
}

/**
 * @param label_title - report할 제목
 * @returns - 라벨 타이틀 component 반환
 */
const ReportLabel = ({ label_title }: ReportLabelProps) => {
  return (
    <>
      <div className={["report__label-field", "txt-white"].join(" ")}>
        <AiIcons.AiOutlineInfoCircle className="report__Info-icon" />
        <p className="report__label">{label_title}</p>
      </div>
    </>
  );
};

export default ReportLabel;
