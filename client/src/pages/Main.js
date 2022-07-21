
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
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
        console.log(res.data.data);

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
          <Button>
            <Link to="workregister">작품 등록하기 </Link>
          </Button>
          </div>
        </div>

      )}


      {/* props로 이동할 페이지 내려주기 */}
      <div className="pictures_list">
        {paintings.map((painting) => (
          <ProductCard // props로 다 ProductCard 컴포넌트에 넘기기!

            key={painting.id}//API로 받은 작품고유 id를 props로 ProductCard 컴포넌트에 내려주기

            picture_name={painting.art_name}
            img={painting.art_image}
            price={painting.art_price}
            artist={painting.art_artist}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;