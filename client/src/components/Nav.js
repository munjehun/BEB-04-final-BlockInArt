import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import { useSelector } from "react-redux";

function Nav() {
  // let loginState = useSelector((state) => state.loginState);
  const navigate = useNavigate();
  const [cookies] = useCookies();
  return (
    <div>
      <div className="nav_link">
        {cookies["username"] ? (
          <div>logout</div>
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
