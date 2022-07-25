import React, { useEffect, useState } from "react";
import "./DetailPainter.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DetailPainter() {
  const navigate = useNavigate();
  const { id } = useParams(); // useParams() = 파라미터 값 받아오는 함수
  const [paintingInfo, setPaintingInfo] = useState([]);
  const [requests, setRequests] = useState([]);

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
        setRequests(res.data.data);
        setPaintingInfo(res.data.artinfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="painter_detail">
      <div className="title">{paintingInfo.art_name}</div>
      <div className="container">
        <div className="picture">
          <img width={300} src={paintingInfo.art_image} />
        </div>
        <div className="purchase_requests">
          {requests.map((request) => (
            <ul key={request.id}>
              <li className="purchase_request_username">
                {request.trade_user_id} 님과 계약
              </li>
              {/* 버튼을 누르면 해당 유저와의 계약 예약취소 페이지로 넘어가도록*/}
              <button
                onClick={() =>
                  navigate(`/contractReservation/${request.trade_user_id}`)
                }
              >
                예약하기
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPainter;
