import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Main: React.FC = () => {
  let navigate = useNavigate();

  const [inputName, setInputName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate(`/kimchi/${inputName}`);
  };

  const handleChangeInput = (e: any) => {
    setInputName(e.target.value);
  };

  return (
    <div className="container">
      <div className="logo">
        <a onClick={() => navigate("/")}>
          <img
            className="logo__img"
            src="https://cdn-icons-png.flaticon.com/512/4727/4727309.png"
            alt="logo__img"
          />
        </a>
        <h1 className={["logo__name", "txt-white"].join(" ")}>김치있니?</h1>
      </div>
      <form className="search bg-white" onSubmit={handleSubmit}>
        <AiIcons.AiOutlineSearch className="search__icon" color="black" />
        <input
          placeholder="재료를 입력하세요."
          className="search__input"
          type="search"
          value={inputName}
          onChange={handleChangeInput}
        ></input>
      </form>
      <button
        className={["btn", "txt-white"].join(" ")}
        onClick={() => {
          navigate("/game");
        }}
      >
        O / X 게임
      </button>
      <div className={["icons", "txt-white"].join(" ")}>
        <a>
          <IoIcons.IoMdGlobe className="icons__icon text-white" />
        </a>
        <a
          href="https://github.com/SaebyeolJu/find-kimchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiIcons.AiFillGithub className="icons__icon text-white" />
        </a>
      </div>
    </div>
  );
};

export default Main;
