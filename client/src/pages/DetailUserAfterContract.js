import React from "react";
import "./DetailUserAfterContract.css";

function DetailUserAfterContract() {
  return (
    <div className="user_detail">
      <div className="title">작품명</div>
      <div className="container">
        <div className="picture">
          <img
            width={300}
            src="https://phinf.pstatic.net/dbscthumb/3329_000_9/20170315200826092_ZYKBVY02G.jpg/9750605_i1.jpg?type=m2000_2000_fst"
          />
        </div>
        <div className="picture-detail">
          <div className="picture-detail__info">
            <span>
              <dt>작가명</dt>
              <dd>홍길동</dd>
            </span>
            <span>
              <dt>분야 장르</dt>
              <dd>추상화</dd>
            </span>
            <span>
              <dt>작품 크기</dt>
              <dd>100 * 200</dd>
            </span>
            <span>
              <dt>금액</dt>
              <dd>1,000,000,000</dd>
            </span>
            <div>
              <dt>작품 설명</dt>
              <dd>
                홍길동이 그린 그림홍길동이 그린 홍길동이 그린 그림홍길동이 그린
                그림홍길동이 그린 그림 홍길동이그린 그림 홍길동이그린 그림
                홍길동이그린 그림 홍길동이동이 그린 홍길동이 그린 그림홍길동이
                그린 그림홍길동이 그린 그림 홍길동이그린 그림 홍길동이그린 그림
                홍길동이그린 그림 홍길동이
              </dd>
            </div>
          </div>
          <div className="picture-detail__request">
            <button>계약 요청 중</button>
            {/* 삼항연산자로 [계약요청 중 / 계약 완료] 변경시키기 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUserAfterContract;
