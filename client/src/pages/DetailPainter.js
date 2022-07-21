import React, { useEffect } from "react";
import "./DetailPainter.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailPainter() {
  const { id } = useParams(); // useParams() = 파라미터 값 받아오는 함수

  useEffect(() => {
    getPaintings();
  }, []);

  const getPaintings = () => {
    axios
      .request({
        method: "GET",
        url: "https://localhost:4000/api/user/artist/detail",
        data: { id: id },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log("GET 요청 성공");
      })
      .catch((err) => {
        console.log(err);
        console.log("GET 요청 실패");
      });
  };

  return (
    <div className="painter_detail">
      <div className="title">작품명</div>
      <div className="container">
        <div className="picture">
          <img
            width={300}
            src="https://phinf.pstatic.net/dbscthumb/3329_000_9/20170315200826092_ZYKBVY02G.jpg/9750605_i1.jpg?type=m2000_2000_fst"
          />
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
