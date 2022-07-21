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
        {page == "mypage" ? (
          <div>요청 수 : {requests}</div>
        ) : (
          <>
            <div>{price}</div>
            <div className="artistName">{artist}</div>
          </>
        )}
      </div>
      <Button
        className="container__detail-btn"
        variant="outline-primary"
        onClick={() => navigate(`/detailUser/${id}`)}
      >
        자세히 보기
      </Button>
    </div>
  );
}

export default ProductCard;
