import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";
import HomeButton from "../components/HomeButton";
import ReportLink from "../components/ReportLink";

const SearchResult = () => {
  let { searchWord } = useParams();
  const [Info, setInfo] = useState("");
  // escaping 처리

  useEffect(() => {
    // fetch 함수를 쓴다면 이렇게 json 가져올 수 있음
    // fetch(`http://localhost:5000/kimchi/${searchWord}`)
    //   .then((res) => console.log(res.text()))
    //   .then((actualData) => console.log(actualData));

    async function fetchData() {
      const request = await axios.get(`/${searchWord}`);
      console.log(request);
      setInfo(request.data.results);
      return request;
    }
    fetchData();
  }, [searchWord]);

  return (
    <div className="container">
      <div className="search-box">
        <h1 className="search__name">{searchWord} 김치</h1>
        <img
          className="search__img"
          src="https://img.koreatimes.co.kr/upload/newsV2/images/202106/88dbf0524fd74259b2d00f6cd7341349.jpg/dims/resize/740/optimize"
          alt="search-img"
        />
        <p>이런..! 한국인 맞으신가요?</p>
      </div>
      <HomeButton />
      <ReportLink />
    </div>
  );
};

export default SearchResult;
