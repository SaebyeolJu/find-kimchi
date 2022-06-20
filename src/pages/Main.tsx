import { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import style from "./App.module.css";
// import styles from "../css/styles.css";

import { useNavigate } from "react-router-dom";

export default function Main() {
  const [ingredient, setIngredient] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleChangeInput = (e: React.ChangeEvent<any>) => {
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
      <form className="search bg-white" onSubmit={handleSubmit}>
        <AiIcons.AiOutlineSearch className="search__icon" />
        <input
          placeholder="재료를 입력하세요."
          className="bg-dark-blue"
          type="search"
          value={ingredient}
          onChange={handleChangeInput}
        ></input>
      </form>
      <button
        className="btn"
        onClick={() => {
          navigate("/game");
        }}
      >
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
