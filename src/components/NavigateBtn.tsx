import { useNavigate } from "react-router-dom";

interface BtnProps {
  btn_txt: string;
  btn_dest: string;
}

/**
 *
 * @param btn_txt - 버튼에 들어갈 말
 * @param btn_dest - page 이동 목적지
 * @returns - 다른 페이지로 이동하는 버튼
 */
const Button = ({ btn_txt, btn_dest }: BtnProps) => {
  let navigate = useNavigate();

  return (
    <button
      className={["btn"].join(" ")}
      onClick={() => {
        navigate(`/${btn_dest}`);
      }}
    >
      {btn_txt}
    </button>
  );
};

export default Button;
