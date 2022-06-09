import { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import style from "./App.module.css";
// import styles from "../css/styles.css";

export default function Main() {
  const [ingredient, setIngredient] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<any>) => {
    setIngredient(e.target.value);
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          className="logo__img"
          src="https://cdn-icons-png.flaticon.com/512/4727/4727309.png"
          alt="logo__img"
        />
        <h1 className="logo__name">김치있니?</h1>
      </div>
      <form className="search bg-white">
        <AiIcons.AiOutlineSearch className="search__icon" />
        <input
          placeholder="재료를 입력하세요."
          className="search__form"
          // className={`${styles.search__form} ${styles.text--grey}`}
          type="search"
          value={ingredient}
          onSubmit={handleSearchInput}
        ></input>
      </form>
      <button className="btn" type="submit">
        O / X 게임
      </button>
      <div className="icons">
        <a>
          <IoIcons.IoMdGlobe className="icons__icon text-white" />
        </a>
        <a href="https://github.com/SaebyeolJu/find-kimchi">
          <AiIcons.AiFillGithub className="icons__icon text-white" />
        </a>
      </div>
    </div>
  );
}
