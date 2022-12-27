import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";

import NoResult from "./NoResult";
import NavigateBtn from "../components/NavigateBtn";
import CategoryIcon from "../components/CategoryIcon";
import ReportLink from "../components/ReportLink";

interface SearchResult {
  ingredient_categories: string[];
  kimchi_title: string;
  kor_comment: string;
  recipe_link: string;
  recipe_pic: string;
  is_kimchi: boolean;
}

interface Props {
  searchResult?: SearchResult | null;
  searchWord?: string;
}

const SearchResult: React.FC<Props> = ({ searchResult }) => {
  let { searchWord } = useParams();
  const decodedWord = searchWord ? decodeURI(searchWord) : "";
  const [result, setResult] = useState<SearchResult | null>(null);

  const fetchInfo = useCallback(async () => {
    const URL = `kimchi/${decodedWord}`;
    const request = await axios.get(URL);

    setResult(request.data.data[0]);
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

  if (!result || !result.is_kimchi) return <NoResult searchWord={searchWord} />;

  return (
    <div className="search-result">
      <div className="search-result__card">
        <div className="search-result__headers">
          <img
            className="search-result__header"
            src={`/img/scroll/scroll_folded.png`}
            alt="scroll"
          />
          <img
            className="search-result__header"
            src={`/img/scroll/scroll_folded.png`}
            alt="scroll"
          />
        </div>
        <div className={["search-result__content", "frame"].join(" ")}>
          <CategoryIcon IngredientCategory={result?.ingredient_categories} />
          <h1 className={["search-result__name", "txt-white"].join(" ")}>
            {decodedWord} 김치
          </h1>
          <h2
            className={["search-result__title", "txt-dark", "italic"].join(" ")}
          >
            {result?.kimchi_title}
          </h2>
          <a href={result?.recipe_link} target="_blank" rel='target="_blank"'>
            <img
              className="search-result__img"
              src={result?.recipe_pic}
              alt="search-img"
            />
          </a>
          <p className={["search-result__comment", "txt-dark"].join(" ")}>
            {result?.kor_comment}
          </p>
          <div className="btn-section">
            <NavigateBtn btn_txt="처음으로" btn_dest="" />
            <button className={["btn"].join(" ")}>
              <a
                href={result?.recipe_link}
                target="_blank"
                rel='target="_blank"'
              >
                레시피 보러가기
              </a>
            </button>
          </div>
          <ReportLink />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
