import React, { useEffect, useState } from "react";
import "./ContractReservation.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailPainter() {
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

  console.log(requests);

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
              <button>예약하기</button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPainter;
