import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import NavigateBtn from "../components/NavigateBtn";

/**
 * @returns - 홈페이지 메인 화면. 검색 기능 제공
 */
export const Main: React.FC = () => {
  let navigate = useNavigate();

  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/kimchi/${searchWord}`);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className="container">
      <div className="logo">
        <a onClick={() => navigate("/direction")}>
          <img
            className="logo__img"
            src="https://cdn-icons-png.flaticon.com/512/4727/4727309.png"
            alt="logo__img"
          />
        </a>
        <h1 className={["logo__title", "txt-white"].join(" ")}>김치있니?</h1>
      </div>
      <form className="search bg-white" onSubmit={handleSubmit}>
        <AiIcons.AiOutlineSearch className="search__icon" color="black" />
        <input
          placeholder="재료를 입력하세요."
          className="search__input"
          type="search"
          value={searchWord}
          onChange={handleChangeInput}
        ></input>
      </form>
      <NavigateBtn
        btn_txt="O / X 게임"
        btn_type="btn--second"
        btn_dest="game"
      />
      <div className={["icon-section", "txt-white"].join(" ")}>
        {/* 언어 설정 */}
        <a className="icon">
          <IoIcons.IoMdGlobe />
        </a>

        {/* git link */}
        <a
          className="icon"
          href="https://github.com/SaebyeolJu/find-kimchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiIcons.AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Main;
