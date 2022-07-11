import React from "react";
import ProductCard from "../components/ProductCard";
import "./Mypage1.css";

function Mypage1() {
  return (
    <div className="mypage1">
      <div className="작가님이신가요">OOO 작가님 반갑습니다</div>

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

export default Mypage1;
