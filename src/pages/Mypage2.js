import React from "react";
import ProductCard from "../components/ProductCard";
import "./Mypage2.css";

function Mypage2() {
  return (
    <div className="mypage1">
      <div className="작가님이신가요">나의 구매요청 목록</div>

      <div className="pictures_list">
        <div className="picture">
          <ProductCard />
        </div>

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Mypage2;
