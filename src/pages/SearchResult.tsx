import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useAsync } from "react-async";
import axios from "../api/axios";

import NotKimchi from "./NotKimchi";
import HomeButton from "../components/HomeButton";
import ReportLink from "../components/ReportLink";
import RecipeButton from "../components/RecipeButton";

const SearchResult = () => {
  let { searchWord }: any = useParams();
  const decodedWord = decodeURI(searchWord);

  const fetchAndSetInfo = useCallback(async () => {
    const URL = `kimchi/${decodedWord}`;
    const request = await axios.get(URL);

    return request.data;
  }, [decodedWord]);

  const {
    data: results,
    error,
    isLoading,
  } = useAsync({
    promiseFn: fetchAndSetInfo,
    watch: decodedWord,
  });

  // 주의
  // useEffect 는 항상 함수 반환함 -> async await를 잘못 쓰면 promise 객체를 반환해서 계속 반환함
  // https://velog.io/@he0_077/useEffect-훅에서-async-await-함수-사용하기

  useEffect(() => {
    /*
    fetch 함수를 쓴다면 이렇게 json 가져올 수 있음
    fetch(`http://localhost:5000/kimchi/${searchWord}`)
      .then((res) => console.log(res.text()))
      .then((actualData) => console.log(actualData));
    */
    fetchAndSetInfo();
  }, [decodedWord]);

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!results) return <NotKimchi />;

  return (
    <div className="container">
      <div className="search-info">
        <h1 className="search__name">{decodedWord} 김치</h1>
        <img
          className="search__img"
          src={results.data[0].img_link}
          width={300}
          alt="search-img"
        />
        <p className="search__comment">{results.data[0].comment}</p>
      </div>
      <div className="btn-box">
        <HomeButton />
        <a
          href={results.data[0].source}
          target="_blank"
          rel='target="_blank"'
          className="btn"
        >
          레시피 보러가기
          {/* <button className="btn">레시피 보러가기</button> */}
        </a>
        {/* <RecipeButton recipe_url={results.data[0].source} /> */}
      </div>
      <ReportLink />
    </div>
  );
};

export default SearchResult;
