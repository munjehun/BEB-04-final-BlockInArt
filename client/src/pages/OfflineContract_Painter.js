import React, { useEffect } from "react";
import OfflineContractCheck from "../components/OfflineContractCheck";
import OfflineContractWaiting from "../components/OfflineContractWaiting";
import "./OfflineContract_Painter.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function OfflineContract() {
  const { id, trade_user_id } = useParams(); // useParams() = 파라미터 값 받아오는 함수
  const user_artistname = JSON.parse(sessionStorage.getItem("user_artistname"));

  useEffect(() => {
    A();
  }, []);

  const A = () => {
    axios
      .request({
        method: "POST",
        url: "http://localhost:4000/api/trade/tradeDetail",
        data: { id: id, trade_user_id: trade_user_id },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // API불러와서 trade_state값이 2면 대기화면, 3이면 계약체크리스트 화면 출력
  // return (
  //   <OfflineContractCheck
  //     user_artistname={user_artistname} //작가는 작가명으로 props 내려주고
  //     trade_user_id={trade_user_id} // 구매자는 user_id로 props 내려줌.
  //   />
  // );
  return <OfflineContractWaiting />;
}

export default OfflineContract;
