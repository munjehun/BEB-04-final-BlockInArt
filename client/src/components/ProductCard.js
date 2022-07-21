import React from "react";
import { Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ picture_name, img, price, artist }) {
  return (
    <div>
      <div className="picture_name">{picture_name}</div>
      <img width="100%" height="100%" src={img}></img>
      <div className="price_painter">
        <div>{price}원</div>
        <div className="작가명">{artist}</div>
      </div>
      <Button
        className="container__detail-btn"
        variant="outline-primary"
        onClick={() => navigate(`/detailUser/${id}`)}
        //props로 받은 id로 작품마다 작품 개별 페이지로 이동하도록
      >
        자세히 보기
      </Button>
    </div>
  );
}

export default ProductCard;