import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";
import useAsync from "../hooks/useAsync";

import HomeButton from "../components/HomeButton";
import ReportLink from "../components/ReportLink";

const SearchResult = () => {
  const [state, refetch] = useAsync(getSearchData, [], true);
  const { loading, data: info, error } = state<any[]>([]);
  let { searchWord }: any = useParams();
  const decodedWord = decodeURI(searchWord);

  async function getSearchData(decodedWord: any) {
    const request = await axios.get(`kimchi/${decodedWord}`);
    return request.data;
  }

  // const { loading, data: info, error } = useAsync(SearchResult);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!info) return null;

  useEffect(() => {
    /*
    fetch 함수를 쓴다면 이렇게 json 가져올 수 있음
    fetch(`http://localhost:5000/kimchi/${searchWord}`)
      .then((res) => console.log(res.text()))
      .then((actualData) => console.log(actualData));
    */
    getSearchData(decodedWord);
  }, [decodedWord]);

  return (
    <div className="container">
      <div className="search-box">
        <h1 className="search__name">{decodedWord} 김치</h1>
        <img className="search__img" src={""} alt="search-img" />
        <p>이런..! 한국인 맞으신가요?</p>
      </div>
      <HomeButton />
      <ReportLink />
    </div>
  );
};

export default SearchResult;
