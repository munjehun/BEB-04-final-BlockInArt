import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav_link">
        <Link to="login">
          <div>로그인</div>
        </Link>
        <Link to="signupChoice">
          <div>회원 가입</div>
        </Link>
      </div>
      <div className="nav_logo">
        <img
          onClick={() => navigate("/")}
          width={200}
          src="https://www.blockart.institute/wp-content/uploads/2018/10/blockart-logo.png"
        />
      </div>
    </div>
  );
}

export default Nav;
