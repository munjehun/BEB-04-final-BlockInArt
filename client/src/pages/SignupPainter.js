import React, { useState } from "react";
import "./SignupPainter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPainter() {
  const navigate = useNavigate();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [artistname, setArtistname] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onPasswordConfirmHandler = (event) => {
    setPasswordConfirm(event.currentTarget.value);
  };
  const onArtistnameHandler = (event) => {
    setArtistname(event.currentTarget.value);
  };

  const onSubmitHandler = () => {
    if (Id.length === 0 || Password.length === 0 || artistname.length === 0) {
      alert("ID와 비밀번호, 작가명을 모두 입력해주세요");
      return;
    }

    //비밀번호 유효성 검사
    if (Password !== PasswordConfirm) {
      alert("비밀번호 확인을 다시 입력해 주세요");
      return;
    }

    let body = {
      user_id: Id,
      user_pass: Password,
      user_artistname: artistname,
    };

    //회원가입 요청
    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/user/join",
        data: body,
        withCredentials: true,
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다. 로그인 해 주세요.");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //중복 체크
  const onDuplicateCheckHandler = () => {
    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/user/checkId",
        data: { user_id: Id },
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.message;
        if (data === "already in use") {
          alert("이미 사용중인 아이디입니다.");
        } else {
          alert("사용 가능한 아이디입니다.");
          setBtnDisabled(false);
        }
      });
  };

  return (
    <div className="signup_painter">
      <div className="form_container">
        <div className="title">회원 가입</div>
        <div className="inputs">
          <div>
            {/* 아이디 입력 칸 */}
            <input
              type="text"
              value={Id}
              onChange={(e) => {
                onIdHandler(e);
                setBtnDisabled(true); //추가로 입력하면 다시 가입하기 버튼 비활성화
              }}
              placeholder="ID"
            />
            <button onClick={onDuplicateCheckHandler}>중복 체크</button>
          </div>
          <div>
            <div className="duplicateCheck-ment">
              중복체크가 되어야 가입하기 버튼이 활성화 됩니다.
            </div>
          </div>
          {/* 비밀번호 입력 칸 */}
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="Password"
          />
          {/* 비밀번호 확인 입력 칸 */}
          <input
            type="password"
            value={PasswordConfirm}
            onChange={onPasswordConfirmHandler}
            placeholder="Confirm Password "
          />
          {/* 작가명 입력 칸 */}
          <input
            type="text"
            value={artistname}
            onChange={onArtistnameHandler}
            placeholder="작가 이름"
          />
        </div>
        {/* 회원가입 신청 버튼 */}
        <div className="submit">
          <button
            type="submit"
            onClick={onSubmitHandler}
            disabled={btnDisabled}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPainter;
