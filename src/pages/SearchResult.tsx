import React from "react";

const SearchResult = (props: any) => {
  return (
    <div className="container">
      <div className="search-box">
        <h1 className="search__name">{props.ingredient}김치</h1>
        <img
          className="search__img"
          src="https://img.koreatimes.co.kr/upload/newsV2/images/202106/88dbf0524fd74259b2d00f6cd7341349.jpg/dims/resize/740/optimize"
          alt="search-img"
        />
        <p>이런..! 한국인 맞으신가요?</p>
      </div>
      <div className="buttons">
        <button className="btn bg-red">다시 도전하기</button>
        <button className="btn bg-dark-blue">도와주세요...</button>
      </div>
      <a className="">이의 / 제보하기</a>
    </div>
  );
};

export default SearchResult;
