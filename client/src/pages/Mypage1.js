import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Mypage1.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Mypage1() {
  const navigate = useNavigate();
  const [paintings, setPaintings] = useState([]);
  const [tradeRequests, setTradeRequests] = useState(0);
  const user_artistname = JSON.parse(sessionStorage.getItem("user_artistname"));

  useEffect(() => {
    getPaintings();
  }, []);

  const getPaintings = () => {
    axios
      .request({
        method: "GET",
        url: "https://localhost:4000/api/user/artist/mypage",
        withCredentials: true,
      })
      .then((res) => {
        console.log("GET 요청 성공");
        setPaintings(res.data.data); //작가의 그림 목록을 상태(paintings)에 저장
        //res.data.data = API로 받아온 작가의 그림 목록
        setTradeRequests(res.data.data.Trades.length);
      })
      .catch((err) => {
        console.log("GET 요청 실패");
      });
  };
  // console.log(paintings);

  //받아온 그림 목록(paintings)들을 ProductCard 컴포넌트에 props로 내려주고 map처리
  return (
    <div className="mypage1">
      <div className="작가님이신가요">{user_artistname} 작가님 반갑습니다</div>
      <div className="pictures_list">
        {paintings.map((painting) => (
          <ProductCard // props로 다 ProductCard 컴포넌트에 넘기기!
            key={painting.id} // 컴포넌트를 map할 때도 key필요!
            picture_name={painting.art_name}
            img={painting.art_image}
            requests={tradeRequests}
            link={"/detailPainter"}
            //할 것)자세히 보기 누르면 이동할 페이지도 props로 넘기기!
          />
        ))}
      </div>
    </div>
  );
}

export default Mypage1;
