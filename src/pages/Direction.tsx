import { useNavigate } from "react-router-dom";
import NavigateBtn from "../components/NavigateBtn";

/**
 * @returns - 페이지 설명 화면
 **/

const Direction = () => {
  let navigate = useNavigate();

  const text = `
  김치있니?는 인터넷에 있는 김치 정보를 모아놓은 웹 서비스입니다.
  SNS상에 김치 술게임이 유행하는걸 보고 만들었습니다.
  **나도 김치 술게임을 해보고 싶은데 기회가 없다?**
  그렇다면 김치있니?를 이용해주세요.
  재료를 입력하면, 해당 재료를 포함한 김치를 찾아줍니다. 
  검색 기능과 재미있게 O / X 게임으로 만들어봤습니다.
  아직 김치화되지 않은 재료를 찾아보세요!
  혹시 검색결과가 잘못되었다면 언제든지 알려주세요!
  만약 없는 김치를 찾아내셨다면 직접 김치를 만들어주셔서 제보해주세요! 
  다른분과 즐거움을 나누기 위해 바로 DB에 반영하겠습니다.
  가볍게 즐겨보세요!
  `;

  return (
    <div className="container">
      <div className="direction">
        <img
          className="logo__img"
          src="/img/logo.svg"
          alt="logo__img"
          onClick={() => navigate("/")}
        />
        <h1 className={["logo__name"].join(" ")}>김치있니?</h1>
        <p className={["direction__desc"].join(" ")}>{text}</p>
        <NavigateBtn btn_txt="처음으로" btn_dest="" />
      </div>
    </div>
  );
};

export default Direction;
