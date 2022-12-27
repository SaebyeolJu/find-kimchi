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

    if (!searchWord) {
      alert("검색어를 입력해주세요");
      return;
    }

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
    <>
      <img className="roof" src="/img/roof.png" />
      <main>
        <div className="main__door-wrapper">
          <img className="main__door main__door--left" />
          <img className="main__door main__door--right" />
          <div className="main__content">
            <div className="main__logo">
              <a onClick={() => navigate("/direction")}>
                <img
                  className="main__logo-img"
                  src="/img/logo.svg"
                  alt="logo__img"
                />
              </a>
              <h2 className="main__logo-title">김치있니?</h2>
            </div>

            {/* 검색창 */}
            <form className="main__search-form" onSubmit={handleSubmit}>
              <AiIcons.AiOutlineSearch
                className="main__search-form-icon-search"
                color="black"
              />
              <input
                placeholder="재료를 입력하세요."
                className="main__search-form-input-field"
                type="search"
                value={searchWord}
                onChange={handleChangeInput}
              ></input>
            </form>

            <div className="main__btn-section">
              <NavigateBtn btn_txt="O / X 게임" btn_dest="game" />
              <NavigateBtn btn_txt="MBTI" btn_dest="game" />
            </div>

            <div className={["main__icon-section", "txt-white"].join(" ")}>
              {/* 언어 설정 버튼 */}
              <a className="main__icon">
                <IoIcons.IoMdGlobe />
              </a>

              {/* git repository로 가는 link */}
              <a
                className="main__icon"
                href="https://github.com/SaebyeolJu/find-kimchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiIcons.AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="stone"></div>
    </>
  );
};

export default Main;
