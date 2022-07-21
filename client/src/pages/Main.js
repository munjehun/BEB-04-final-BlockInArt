import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const user_id = JSON.parse(sessionStorage.getItem("user_id"));
  const user_artistname = JSON.parse(sessionStorage.getItem("user_artistname"));

  const navigate = useNavigate();
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    getPaintings();
  }, []);

  const getPaintings = () => {
    axios
      .request({
        method: "GET",
        url: "https://localhost:4000/api/art/artList",
        withCredentials: true,
      })
      .then((res) => {
        setPaintings(res.data.data);
      });
  };

  return (
    <div className="main">
      {/* 일반 유저일때는 작품등록하기 버튼이 안 보이도록*/}
      {user_id && user_artistname == null ? (
        <div>일반 유저 환영 문구</div>
      ) : (
        <div className="wellcome_ment">
          <div className="작가님이신가요">
            작가님이신가요? 빠르게 작품을 등록하고 판매계약까지 맺어보세요
          </div>
          <div>
            <button onClick={() => navigate("/workregister")}>
              작품 등록하기
            </button>
          </div>
        </div>
      )}

      {/* props로 이동할 페이지 내려주기 */}
      <div className="pictures_list">
        {paintings.map((painting) => (
          <ProductCard // props로 다 ProductCard 컴포넌트에 넘기기!
            key={painting.id} // 컴포넌트를 map할 때도 key필요!
            id={painting.id}
            picture_name={painting.art_name}
            img={painting.art_image}
            price={painting.art_price}
            artist={painting.art_artist}
            //할 것)자세히 보기 누르면 이동할 페이지도 props로 넘기기!
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
