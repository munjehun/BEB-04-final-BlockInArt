import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";

import "./Main.css";

function Main() {
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
      <div className="wellcome_ment">
        <div className="작가님이신가요">
          작가님이신가요? 빠르게 작품을 등록하고 판매계약까지 맺어보세요!
        </div>
        <div>
          <Button>
            <Link to="workregister">작품 등록하기 </Link>
          </Button>
        </div>
      </div>
      {/* props로 이동할 페이지 내려주기 */}
      <div className="pictures_list">
        {paintings.map((painting) => (
          <ProductCard // props로 다 ProductCard 컴포넌트에 넘기기!
            key={painting.id} // 컴포넌트를 map할 때도 key필요!
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
