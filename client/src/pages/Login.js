import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { useCookies } from "react-cookie";
import { AuthContext, MessageContext } from "../context/store";

function Login() {
  const { authstate, login } = useContext(AuthContext);
  const { notify } = useContext(MessageContext);

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const [, setCookie] = useCookies();

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    //새로고침하면 작동 X
    if (authstate.auth) {
      console.log("이미 로그인 되었습니다.");
      navigate("/");
    } else {
      console.log("로그인 해 주세요.");
    }
    return () => {};
  }, []);

  const onSubmitHandler = () => {
    if (Id.length === 0 || Password.length === 0) {
      console.log("ID와 비밀번호를 모두 입력해주세요");
      return;
    }
    let body = {
      user_id: Id,
      user_pass: Password,
    };

    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/user/login",
        data: body,
        withCredentials: true,
      })
      //컨텍스트에 저장!!! 어케하냐!!!!!!!!!!
      .then((res) => {
        const user = res.data.data.user_id;
        console.log(res);
        login({ user_id: user });
        notify(`환영합니다! ${user}님`, "success");
        navigate("/"); // 홈화면으로 자동 이동
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data === "잘못된 비밀번호 입니다.")
          notify("잘못된 비밀번호입니다", "error");
        else if (err.response.data === "계정이 존재하지 않습니다.")
          notify("계정이 존재하지 않습니다", "error");
        else notify("로그인할 수 없습니다. 관리자에게 문의해주세요", "error");
      });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };

  return (
    <div className="login">
      <div className="form_container">
        <div className="title">Login</div>
        <form className="inputs">
          <input type="id" value={Id} onChange={onIdHandler} placeholder="ID" />
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="Password"
            onKeyPress={onKeyPress}
          />
        </form>
        <div className="submit">
          <button type="submit" onClick={onSubmitHandler}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
