import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupChoice from "./pages/SignupChoice";
import SignupPainter from "./pages/SignupPainter";
import SignupUser from "./pages/SignupUser";
import Workregister from "./pages/Workregister";
import Mypage1 from "./pages/Mypage1";
import Mypage2 from "./pages/Mypage2";
import DetailPainter from "./pages/DetailPainter";
import DetailUser from "./pages/DetailUser";
import DetailUserAfterContract from "./pages/DetailUserAfterContract";
import { useEffect, useReducer } from "react";
import { AuthContext, MessageProvider } from "./context/store";
import { authReducer, initialState } from "./context/reducer";
import axios from "axios";

function App() {
  const [authstate, dispatch] = useReducer(authReducer, initialState);
  // authReducer = authstate 상태를 바꿔주는 reducer.
  // initialState = authstate의 초기상태.

  //useReducer
  const login = (user) => {
    dispatch({ type: "LOGIN", user_id: user.user_id }); //작가명 추가
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //로그인 여부 처음 한 번 실행
  useEffect(() => {
    check();
  }, []);

  //홈페이지에 접속하면 로그인 됐는지 여부 판단
  const check = async () => {
    try {
      let res = await axios.request({
        method: "GET",
        // url: "https://olog445.herokuapp.com/offchain/auth/login",
        url: "https://localhost:4000/api/user/login",
        withCredentials: true,
      });
      console.log(res.data);
      login(res.data); //로그인 상태 바꿔주는 reduce!
    } catch (err) {
      logout();
    }
  };

  return (
    <MessageProvider>
      <AuthContext.Provider value={{ authstate, login, logout }}>
        {/* 모든 하위요소들은  authstate, login, logout 에 접근할 수 있게 됨 */}
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signupChoice" element={<SignupChoice />} />
            <Route path="/signupPainter" element={<SignupPainter />} />
            <Route path="/signupUser" element={<SignupUser />} />
            <Route path="/detailPainter" element={<DetailPainter />} />
            <Route path="/detailUser" element={<DetailUser />} />
            <Route path="/workregister" element={<Workregister />} />
            <Route path="/mypage1" element={<Mypage1 />} />
            <Route path="/mypage2" element={<Mypage2 />} />
            <Route
              path="/detailUserAfterContract"
              element={<DetailUserAfterContract />}
            />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </AuthContext.Provider>
    </MessageProvider>
  );
}

export default App;
