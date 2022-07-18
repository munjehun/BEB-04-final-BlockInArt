import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const user_id = JSON.parse(sessionStorage.getItem("user_id"));
  const user_artistname = JSON.parse(sessionStorage.getItem("user_artistname"));

  // 로그아웃 함수
  function logout() {
    sessionStorage.clear(); // 세션 지우기
    window.location.replace("/"); //메인화면으로 새로고침
  }

  return (
    <div>
      <div className="nav_link">
        {/* 삼항연산자 */}
        {user_artistname ? (
          <>
            <Link to="mypage1">
              <div>마이페이지</div>
            </Link>
            <button onClick={logout}>
              <div>로그아웃</div>
            </button>
          </>
        ) : user_id ? (
          <>
            <Link to="mypage2">
              <div>마이페이지</div>
            </Link>
            <button onClick={logout}>
              <div>로그아웃</div>
            </button>
          </>
        ) : (
          <>
            <Link to="login">
              <div>로그인</div>
            </Link>
            <Link to="signupChoice">
              <div>회원 가입</div>
            </Link>
          </>
        )}
      </div>
      <div className="nav_logo">
        <img
          alt="block in art logo image"
          onClick={() => navigate("/")}
          width={200}
          src="https://www.blockart.institute/wp-content/uploads/2018/10/blockart-logo.png"
        />
      </div>
    </div>
  );
}

export default Nav;
