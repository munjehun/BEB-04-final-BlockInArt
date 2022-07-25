import React from "react";

function OfflineContractWaiting() {
  return (
    <div className="offlineContract_container">
      <div className="checklist"></div>
      <div className="contractWaiting">
        상대의 계약 확정을 기다리는 중입니다.
      </div>
      <div className="contractDetail--check">
        구매자가 계약확정을 하면 계약진행을 위한 페이지가 나타납니다.
      </div>
    </div>
  );
}

export default OfflineContractWaiting;
