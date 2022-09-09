import React, { useState, useCallback } from "react";
import ReportLabel from "../components/ReportLabel";
import NavigateBtn from "../components/NavigateBtn";
import axios from "../api/axios";

/**
 * @returns - 게임 / 검색 결과에 대한 정정 의견을 남기는 페이지
 */
const Report = () => {
  // values : 사용자 의견의 내용
  const [values, setValues] = useState({
    message: "",
  });
  // errors : 사용자 의견의 유효성 검사 결과
  const [errors, setErrors] = useState({
    message_error: "",
  });

  const { message } = values;

  // user의 message 입력이 적합한지(null이 아닌지) 검사
  const checkMessage = useCallback(() => {
    if (message === "") {
      setErrors({
        ...errors,
        message_error: "empty_message",
      });
      alert("앗.. 입력을 다시한번 확인해주세요.");
      return false;
    } else {
      setErrors({
        ...errors,
        message_error: "",
      });
      return true;
    }
  }, [message]);

  // input 값이 바뀔 때마다 발생하는 이벤트. 입력값 values state에 저장
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  // 메모를 빈 메모로 리셋. 유저가 의견 전송 후 실행됨
  const resetReport = () => {
    setValues({ message: "" });
  };

  // 의견을 서버에 전송하는 함수(axios 사용해 post)
  const postReport = useCallback(async () => {
    const URL = `/report`;

    const content = {
      message: values.message,
    };

    // json 형태로 서버에 전송
    const body = JSON.stringify(content);

    // axios header
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const request = await axios.post(URL, body, config);
      return request.data;
    } catch (error) {
      console.log(error);
    }
  }, [message]);

  // 버튼을 누르면 입력이 적합한지 검사하고, 적합하다면 서버에 post
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const isValid = checkMessage();
      if (isValid) {
        await postReport();
        alert("소중한 의견 감사합니다.");
        resetReport();
      } else {
        alert("뭔가 잘못되었어요. 다시 한번 확인해주세요.");
      }
    },
    [checkMessage]
  );

  return (
    <div className="container">
      <form className="report" onSubmit={handleSubmit}>
        <h1 className={["report__title", "txt-white"].join(" ")}>제보하기</h1>

        <ReportLabel label_title="메모" />
        <input
          className="report__input"
          value={values.message}
          placeholder="메모를 남겨주세요 <br/> ex)링크... 수정하겠습니다. 기타의견도 감사합니다."
          onChange={handleChange}
          name="message"
          type="text"
        />
        <div className="buttons">
          <NavigateBtn btn_txt="취소" btn_type="btn--second" btn_dest="" />
          <button
            className={["btn--prime", "txt-white"].join(" ")}
            onClick={handleSubmit}
            type="submit"
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;
