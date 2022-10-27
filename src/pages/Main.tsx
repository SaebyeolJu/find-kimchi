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

  /**
   * @description - 입력받은 검색어 영/한으로만 이루어져있는지 확인 후 엔터를 누르면 검색 결과 페이지로 이동
   * @param e - 키보드 이벤트
   * @returns - 검색 결과 페이지로 이동
   * @see SearchResult.tsx
   *
   */
  const handleSubmit = async (e: React.FormEvent) => {
    // 검색어가 한글, 영어로만 이루어져있는지 확인
    const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z\s]+$/;
    e.preventDefault();

    if (regExp.test(searchWord)) {
      // 단어 사이 공백은 제거
      searchWord.replace(/\s/g, "")
        ? navigate(`/kimchi/${searchWord.replace(/\s/g, "")}`)
        : alert("검색어를 입력해주세요");
      setSearchWord("");
    } else {
      alert("한글, 영어로만 입력해주세요");
    }
  };

  /**
   * @description - 검색어를 입력하면 검색어를 상태로 저장
   * @param e - 키보드 이벤트
   */
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
      {/* 검색창 */}
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
        {/* 언어 설정 버튼 */}
        <a className="icon">
          <IoIcons.IoMdGlobe />
        </a>

        {/* git repository로 가는 link */}
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
