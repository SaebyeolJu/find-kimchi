import { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export default function Main() {
  const [ingredient, setIngredient] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<any>) => {
    setIngredient(e.target.value);
  };

  return (
    <div className="container">
      <div className="logo_box">
        <img
          className="logo-img"
          src="https://cdn-icons-png.flaticon.com/512/4727/4727309.png"
          alt="logo"
        />
        <h1 className="logo --ff-main text-white">김치있니?</h1>
      </div>
      <div className="input_box center bg-white">
        <AiIcons.AiOutlineSearch />
        <input 
          type="search"
          placeholder="김치 재료를 입력하세요."
          className="text-grey"
          value={ingredient}
          onSubmit={handleSearchInput}
        ></input>
      </div>
      <button className="btn text-white">O / X 게임</button>
      <div className="icon_box">
        <a>
          <IoIcons.IoMdGlobe className="text-white" />
        </a>
        <a href="https://github.com/SaebyeolJu/find-kimchi">
          <AiIcons.AiFillGithub className="text-white" />
        </a>
      </div>
    </div>
  );
}
