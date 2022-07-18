import React from "react";
import "./Workregister.css";

function Workregister() {
  return (
    <div className="workregister">
      <div className="register_ment">
        빠르게 작품을 등록하고 구매자를 찾아보세요
      </div>
      <div className="workregister_container">
        <div className="work_about">
          <ul>
            <li>
              작품명
              <input type="text" />
            </li>
            <li>
              작품 크기
              <input type="text" />
            </li>
            <li>
              <form>
                <label>
                  작품 분야 , 장르
                  <select name="genre">
                    <option value="0">분야를 선택하세요</option>
                    <option value="1">동양화</option>
                    <option value="2">서양화</option>
                    <option value="3">추상화</option>
                    <option value="4">기타</option>
                  </select>
                </label>
              </form>
            </li>
            <li>
              작품 사진 <input type="file" accept="image/*" />
            </li>
            <li>
              작품 설명
              <textarea
                placeholder="작품에 대한 설명을 입력하세요"
                rows="4"
                cols="35"
              />
            </li>
          </ul>
        </div>
        <div className="hope_price">
          희망 판매 금액
          <div className="hope_price_input">
            <input type="number" step="10000" />원
          </div>
          <div className="register_button">
            <button type="submit">작품 등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Workregister;
