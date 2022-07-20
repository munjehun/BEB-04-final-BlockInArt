import React from "react";
import { Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ picture_name, img, price, artist, requests, link }) {
  const navigate = useNavigate();

  return (
    <div className="productCard">
      <div className="picture_name">{picture_name}</div>
      <img src={img}></img>
      <div className="price_painter">
        <div>{price}</div>
        <div className="artistName">{artist}</div>
        {requests ? <div>요청 수 : {requests}</div> : <></>}
        {/* 조건으로 무엇을 해야 할까? 같이 논의해보자 */}
      </div>
      <Button
        className="container__detail-btn"
        variant="outline-primary"
        onClick={() => navigate("/detailUser")}
      >
        자세히 보기
      </Button>
    </div>
  );
}

export default ProductCard;
