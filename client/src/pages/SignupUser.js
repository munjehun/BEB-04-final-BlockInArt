import React from "react";
import "./SignupUser.css";

function SignupUser() {
  return (
    <div className="signup_user">
      <div className="form_container">
        <div className="title">Signup</div>
        <div className="inputs">
          <input
            type="id"
            // value={Username}
            // onChange={onUsernameHandler}
            placeholder="ID"
            // onKeyPress={onKeyPress}
          />
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
