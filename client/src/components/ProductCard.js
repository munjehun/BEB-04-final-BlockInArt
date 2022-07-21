import React from "react";
import { Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  picture_name,
  img,
  price,
  artist,
  requests,
  link,
  page,
}) {
  const navigate = useNavigate();

  return (
    <div className="productCard">
      <div className="picture_name">{picture_name}</div>
      <img src={img}></img>
      <div className="price_painter">
        {page == "mypage" ? ( //마이페이지에 출력될 때만 요청 수 가 나오도록
          <div>요청 수 : {requests}</div>
        ) : (
          <>
            {/* 메인페이지에 출력될 때는 가격과 작가명이 나오도록 */}
            <div>{price}</div>
            <div className="artistName">{artist}</div>
          </>
        )}

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
