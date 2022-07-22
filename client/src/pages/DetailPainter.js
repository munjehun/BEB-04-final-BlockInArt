import React, { useEffect, useState } from "react";
import "./DetailPainter.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailPainter() {
  const { id } = useParams(); // useParams() = 파라미터 값 받아오는 함수
  const [paintingInfo, setPaintingInfo] = useState([]);

  useEffect(() => {
    getPaintings();
  }, []);

  const getPaintings = () => {
    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/user/artist/detail",
        data: { id: id },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.artinfo);
        setPaintingInfo(res.data.artinfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(id);

  return (
    <div className="painter_detail">
      <div className="title">{paintingInfo.art_name}</div>
      <div className="container">
        <div className="picture">
          <img width={300} src={paintingInfo.art_image} />
        </div>
        <div className="purchase_requests">
          <ul>
            <li className="purchase_request_username">
              구매 요청자 1 님과 계약
            </li>
            <button>예약하기</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailPainter;
