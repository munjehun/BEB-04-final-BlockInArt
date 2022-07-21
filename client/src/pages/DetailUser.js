import React from "react";
import "./DetailUser.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const user_id = JSON.parse(sessionStorage.getItem("user_id"));
  const { id } = useParams(); // useParams() = 파라미터 값 받아오는 함수
  const [paintingInfo, setPaintingInfo] = useState([]);
  const [requestState, setRequestState] = useState(false);

  useEffect(() => {
    getPaintingInfo();
  }, []);

  const getPaintingInfo = () => {
    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/user/general/detail",
        data: { id: id },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data.Trades[0].trade_user_id);
        // 최종적으로는 user_id와 trade_user_id가 같으면 버튼을 예약요청중 으로 바뀌도록 해야함.
        console.log(res.data.data.Trades);
        setPaintingInfo(res.data.data); // res.data.data가 작품에 대한 정보
      });
  };

  const purchaseRequest = () => {
    axios
      .request({
        method: "POST",
        url: "https://localhost:4000/api/trade/buyRequest",
        data: { id: id },
        withCredentials: true,
      })
      .then((res) => {
        setRequestState(true);
        if (res.data == "already requested") {
          alert("이미 계약이 요청되었습니다.");
        } else if (res.data.message == "request success") {
          alert("계약이 요청되었습니다.");
        }
      });
  };

  return (
    <div className="user_detail">
      <div className="title">{paintingInfo.art_name}</div>
      <div className="container">
        <div className="picture">
          <img width={300} src={paintingInfo.art_image} />
        </div>
        <div className="picture-detail">
          <div className="picture-detail__info">
            <span>
              <dt>작가명</dt>
              <dd>{paintingInfo.art_artist}</dd>
            </span>
            <span>
              <dt>분야 장르</dt>
              <dd>{paintingInfo.art_genre}</dd>
            </span>
            <span>
              <dt>작품 크기</dt>
              <dd>{paintingInfo.art_size}</dd>
            </span>
            <span>
              <dt>금액</dt>
              <dd>{paintingInfo.art_price}</dd>
            </span>
            <div>
              <dt>작품 설명</dt>
              <dd>{paintingInfo.art_desc}</dd>
            </div>
          </div>
          <div className="picture-detail__request">
            {requestState ? (
              <button onClick={purchaseRequest}>구매 계약 요청 중</button>
            ) : (
              <button onClick={purchaseRequest}>구매 계약 요청 보내기</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
