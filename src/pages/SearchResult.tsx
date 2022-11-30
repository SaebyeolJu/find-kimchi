import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";

import NoResult from "./NoResult";
import NavigateBtn from "../components/NavigateBtn";
import ReportLink from "../components/ReportLink";
import CategoryIcon from "../components/CategoryIcon";

import Button from "../components/Button";

const SearchResult = () => {
  let { searchWord }: any = useParams();
  const decodedWord = decodeURI(searchWord);
  const [searchResult, setSearchResult] = useState();

  const fetchInfo = useCallback(async () => {
    const URL = `kimchi/${decodedWord}`;
    const request = await axios.get(URL);

    setSearchResult(request.data.data[0]);
    return request.data.data[0];
  }, [decodedWord]);

  useEffect(() => {
    /*
    fetch 함수를 쓴다면 이렇게 json 가져올 수 있음
    fetch(`http://localhost:5000/kimchi/${searchWord}`)
      .then((res) => console.log(res.text()))
      .then((actualData) => console.log(actualData));
    */
    fetchInfo();
  }, [decodedWord]);

  // 주의
  // useEffect 는 항상 함수 반환함 -> async await를 잘못 쓰면 promise 객체를 반환해서 계속 반환함
  // https://velog.io/@he0_077/useEffect-훅에서-async-await-함수-사용하기

  if (!searchResult || !searchResult.is_kimchi)
    return <NoResult searchWord={searchWord} />;

  return (
    <div className="result">
      <div className="result__header">
        <img
          className="result__header-img"
          src={`/img/scroll/scroll_folded.png`}
          alt="scroll"
        />
        <img
          className="result__header-img"
          src={`/img/scroll/scroll_folded.png`}
          alt="scroll"
        />
      </div>
      <div className="result__card">
        <div className="result__sidebar"></div>
        <div className="result__content">
          <CategoryIcon category={searchResult?.ingredient_categories} />
          <h1
            className={["result__name", "txt-white", "bg-dark-brown"].join(" ")}
          >
            {decodedWord} 김치
          </h1>
          <h2 className={["result__title", "txt-dark", "italic"].join(" ")}>
            {searchResult?.kimchi_title}
          </h2>
          <a
            href={searchResult?.recipe_link}
            target="_blank"
            rel='target="_blank"'
          >
            <img
              className="result__img"
              src={searchResult?.recipe_pic}
              width={300}
              alt="search-img"
            />
          </a>
          <p className={["result__comment", "txt-dark"].join(" ")}>
            {searchResult?.kor_comment}
          </p>
          <div className="buttons">
            <NavigateBtn btn_txt="처음으로" btn_type="btn--prime" btn_dest="" />
            <button className={["btn--second", "txt-dark"].join(" ")}>
              <a
                href={searchResult?.recipe_link}
                target="_blank"
                rel='target="_blank"'
              >
                레시피 보러가기
              </a>
            </button>
          </div>
          <div className="result__side"></div>
          <ReportLink />
        </div>
        <div className="result__sidebar"></div>
      </div>
    </div>
  );
};

export default SearchResult;
