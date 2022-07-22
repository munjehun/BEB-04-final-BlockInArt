import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, picture_name, img, price, artist, requests, page, trade_state }) {
  const navigate = useNavigate();
  const [trade, setTrade] = useState("");
  const [tradeState, setTradeState] = useState();

  useEffect(()=>{
    setTradeState(trade_state);
    if(page === "general_mypage"){
      console.log("trade_state : ",trade_state)
      switch(trade_state) {
        case '1':
          console.log("계약요청");
          setTrade("계약요청 완료")
          break;
        case '2':
          console.log("작가님 거래 예약 신청 완료");
          setTrade("작가님이 계약을 희망중!")
          break;

        case '3':
          console.log("계약 확정");
          setTrade("계약 확정")
          break;

        default:
          console.log("not case in trade_state");
          break;
      }
    }

  }, []);

  return (

    <div className="productCard">
      <div className="picture_name">{picture_name}</div>
      <img src={img} alt = ''></img>
      <div className="price_painter">
        {page === "mypage" ? ( //작가마이페이지에 출력될 때만 요청 수 가 나오도록
          <div>계약 요청 수 : {requests}</div>
        ) : (
          <>

            {/* 메인페이지에서 출력될 때는 가격과 작가명이 나오도록 */}

            <div>{price}</div>
            <div className="artistName">{artist}</div>
          </>
        )}

        {(page === "general_mypage")  ? ( 
          <>
            <div>{trade}</div>
            <div>작품이름 : {picture_name}</div>
          </>
        ) : (
          console.log("not general_mypage")
        )}



      </div>
      <Button
        className="container__detail-btn"
        variant="outline-primary"
        onClick={
          page == "mypage"
            ? () => navigate(`/detailPainter/${id}`)
            : () => navigate(`/detailUser/${id}`, {state: {tradeState:tradeState}})
          // 작가 마이페이지에서 클릭하면 작가 작품상세페이지로 이동하도록!!
        }
        //props로 받은 id로 작품마다 작품 개별 페이지로 이동하도록
      >
        자세히 보기
      </Button>
    </div>
  );
}

export default ProductCard;


