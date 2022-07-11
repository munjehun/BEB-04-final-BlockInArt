import React from "react";
import "./SignupPainter.css";

function SignupPainter() {
  return (
    <div className="signup_painter">
      <div className="form_container">
        <div className="title">Signup</div>
        <div className="inputs">
          <div>
            <input
              type="id"
              // value={Username}
              // onChange={onUsernameHandler}
              placeholder="ID"
              // onKeyPress={onKeyPress}
            />
            <button>중복체크</button>
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
          <input
            type="text"
            // value={Password}
            // onChange={onPasswordHandler}
            placeholder="작가 이름"
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

export default SignupPainter;
