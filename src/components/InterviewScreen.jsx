import React from "react";

function InterviewScreen() {
  return (
    <div className="container">
      {/* 上部: 名前と写真、年齢 */}
      <div className="flex-row">
        <div className="profile-image" />
        <div>
          <h2>やまだ たろう</h2>
          <h2>山田 太郎 (30)</h2>
        </div>
      </div>

      {/* ステップ矢印部分 */}
      <div className="step-container">
        <div className="step">エントリー</div>
        <div className="step">調整中</div>
        <div className="step highlight">カジュアル</div>
        <div className="step">調整中</div>
        <div className="step">1次</div>
        <div className="step">調整中</div>
        <div className="step">2次</div>
        <div className="step">調整中</div>
        <div className="step">最終</div>
        <div className="step">調整中</div>
      </div>

      {/* 判定結果の表 */}
      <table className="result-table">
        <tbody>
          <tr>
            <th>判定結果</th>
            <td>合格</td>
          </tr>
          <tr>
            <th>誠実</th>
            <td>1</td>
          </tr>
          <tr>
            <th>チーム愛</th>
            <td>2</td>
          </tr>
          <tr>
            <th>愛嬌</th>
            <td>2</td>
          </tr>
          <tr>
            <th>謙虚さと責任感</th>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      {/* 備考欄 */}
      <div style={{ marginTop: "1rem" }}>
        <span className="label">備考記入欄</span>
        <textarea className="text-area" placeholder="メモなどを記入"></textarea>
      </div>
    </div>
  );
}

export default InterviewScreen;
