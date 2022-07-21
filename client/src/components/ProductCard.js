import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ picture_name, img, price, artist }) {
  return (
    <div>
      <div className="picture_name">{picture_name}</div>
      <img width="100%" height="100%" src={img}></img>
      <div className="price_painter">
        <div>{price}원</div>
        <div className="작가명">{artist}</div>
      </div>
      <Link to="detailPainter">
        <Button className="container__detail-btn" variant="outline-primary">
          자세히 보기
        </Button>
      </Link>
    </div>
  );
}

export default ProductCard;
