import React from "react";
import "./SignupUser.css";

function SignupUser() {
  return (
    <div className="signup_user">
      <div className="form_container">
        <div className="title">회원 가입</div>
        <div className="inputs">
          <div>
            <input
              type="text"
              // value={Username}
              // onChange={onUsernameHandler}
              placeholder="ID"
              // onKeyPress={onKeyPress}
            />
            <button>중복 체크</button>
          </div>

          <input
            type="password"
            // value={Password}
            // onChange={onPasswordHandler}
            placeholder="Password"
            // onKeyPress={onKeyPress}
          />
          <input
            type="password"
            // value={Password}
            // onChange={onPasswordHandler}
            placeholder="Confirm Password "
            // onKeyPress={onKeyPress}
          />
        </div>
        <div className="submit">
          <button
            type="submit"
            //   onClick={onSubmitHandler}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupUser;
