import React from "react";

function ScheduleScreen() {
  return (
    <div className="container">
      <h2>スケジュール調整</h2>
      <div className="schedule-form">
        {/* 左側：入力項目 */}
        <div>
          <div className="form-group">
            <label>調整期間</label><br />
            <input type="text" placeholder="yyyy/mm/dd" style={{ width: "80px" }} />
            {" - "}
            <input type="text" placeholder="yyyy/mm/dd" style={{ width: "80px" }} />
          </div>
          <div className="form-group">
            <label>時間帯</label><br />
            <input type="text" placeholder="hh/mm" style={{ width: "60px" }} />
            {" - "}
            <input type="text" placeholder="hh/mm" style={{ width: "60px" }} />
          </div>
          <div className="form-group">
            <label>面談時間</label><br />
            <input type="number" defaultValue="30" style={{ width: "50px" }} /> 分
          </div>
          <div className="form-group">
            <label>担当者</label><br />
            <div>◉ 大谷 太郎</div>
            <div>◉ 田中 次郎</div>
            <input type="text" placeholder="氏名/メールアドレス" style={{ marginTop: "4px" }} />
          </div>
        </div>

        {/* 右側：候補日一覧 */}
        <div>
          <label>候補日一覧</label>
          <span className="copy-button">copy</span>
          <div className="schedule-candidate-list">
            <div>2025/1/15(水) 15:00-15:30</div>
            <div>2025/1/15(水) 16:00-16:30</div>
            <div>2025/1/16(木) 15:00-15:30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleScreen;
