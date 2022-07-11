import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
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

function App() {
  return (
    <>
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

          {/* <Route path="/trade" element={<Trade />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/board" element={<PostMain />} />
          <Route path="/postView/:no" element={<PostView />} />
          <Route path="/postWrite" element={<PostWrite />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
