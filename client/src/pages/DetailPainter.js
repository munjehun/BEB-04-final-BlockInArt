import React from "react";
import "./DetailPainter.css";

function DetailPainter() {
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
            <li className="purchase_request_username">구매 요청자 1 이름</li>
            <li className="purchase_request_price">구매 요청 가격</li>
            <button>계약하기</button>
          </ul>

          <ul>
            <li className="purchase_request_username">구매 요청자 2 이름</li>
            <li className="purchase_request_price">구매 요청 가격</li>
            <button>계약하기</button>
          </ul>

          <ul>
            <li className="purchase_request_username">구매 요청자 3 이름</li>
            <li className="purchase_request_price">구매 요청 가격</li>
            <button>계약하기</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailPainter;
