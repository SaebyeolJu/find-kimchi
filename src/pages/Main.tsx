import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "../css/styles.css";

export default function Main() {
  return (
    <>
      <a>
        <AiIcons.AiFillGithub />
      </a>
      <a>
        <IoIcons.IoMdGlobe />
      </a>
      <div>
        <img className="logo-img" src="../assets/img/logo.png" />
        <h1 className="logo --ff-main">김치 있니?</h1>
      </div>
      <div className="flex">
        <input value="김치재료를 입력하세요" className="text-grey"></input>
        <AiIcons.AiOutlineSearch />
      </div>
      <button className="btn">O / X 게임</button>
    </>
  );
}
