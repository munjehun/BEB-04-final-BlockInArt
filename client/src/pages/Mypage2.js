import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "./Mypage2.css";
import axios from "axios";

function Mypage2() {
  //const user_id = JSON.parse(sessionStorage.getItem("user_id"));//사용자 id 추출
  const [paintings, setPaintings] = useState([]);
  const [trade, setTrade] = useState("");
  //const navigate = useNavigate();
  let temp = [];

  useEffect(() => {
    getPaintings();

  }, []);

  const getPaintings = () => {
    axios
      .request({
        method: "GET",
        url: "https://localhost:4000/api/user/general/mypage",
        withCredentials: true,
      })
      .then((res) => {
        setPaintings(res.data.data);
        temp = res.data.data;
        console.log("GET 요청 성공");
      })
      .catch((err) => {
        console.log("GET 요청 실패");
      });
  };

  const tradStateSelect = (trade_state) => {
    switch(trade_state) {
      case '1':
        console.log("계약요청");
        setTrade("거래요청 완료")
        break;
      case '2':
        console.log("거래 예약");
        setTrade("거래 예약 완료")
        break;

      case '3':
        console.log("계약 확정");
        setTrade("계약 확정")
        break;

      default:
        console.log("not case in trade_state");
        break;
  }}

  return (
    <div className="mypage2">
      <div className="작가님이신가요">나의 구매요청 목록</div>
      <div className="pictures_list">
        {paintings.map((painting) => (

          <ProductCard 
            key={painting.Art.id}
            id= {painting.Art.id} 
            picture_name={painting.Art.art_name}
            img={painting.Art.art_image}
            trade_state = {painting.trade_state}
            page = "general_mypage"
          />
        ))}

      </div>
    </div>
  );
}

export default Mypage2;
