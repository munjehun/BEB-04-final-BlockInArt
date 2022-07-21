import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Mypage2.css";
import axios from "axios";

function Mypage2() {
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
        console.log(res);
        console.log("GET 요청 성공");
      })
      .catch((err) => {
        console.log("GET 요청 실패");
      });
  };

  return (
    <div className="mypage2">
      <div className="작가님이신가요">나의 구매요청 목록</div>

      <div className="pictures_list">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Mypage2;
