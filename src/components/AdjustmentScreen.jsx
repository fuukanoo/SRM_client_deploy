// import React from "react";

// function AdjustmentScreen({ profileData }) {
//   const openFileInNewTab = (file) => {
//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       window.open(fileURL, "_blank");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>調整中</h2>
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//         {/* 写真表示 */}
//         <div
//           style={{
//             width: "120px",
//             height: "160px",
//             backgroundColor: "#e0e0e0",
//             borderRadius: "5px",
//             backgroundImage: profileData.photo
//               ? `url(${URL.createObjectURL(profileData.photo)})`
//               : "none",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             border: "1px solid #ccc",
//             marginRight: "20px",
//           }}
//         />
//         <div>
//           <p>
//             <strong>フリガナ:</strong> {profileData.furigana || "未入力"}
//           </p>
//           <p>
//             <strong>名前:</strong> {profileData.name || "未入力"}
//           </p>
//           <p>
//             <strong>最終学歴:</strong> {profileData.education || "未入力"}
//           </p>
//           <p>
//             <strong>職務経歴:</strong> {profileData.career || "未入力"}
//           </p>
//         </div>
//       </div>

//       {/* ファイル表示 */}
//       <div>
//         <p>
//           <strong>履歴書:</strong>{" "}
//           {profileData.resume ? (
//             <span
//               onClick={() => openFileInNewTab(profileData.resume)}
//               style={{ cursor: "pointer", color: "#007bff" }}
//             >
//               📎
//             </span>
//           ) : (
//             "未アップロード"
//           )}
//         </p>
//         <p>
//           <strong>職務経歴書:</strong>{" "}
//           {profileData.careerSheet ? (
//             <span
//               onClick={() => openFileInNewTab(profileData.careerSheet)}
//               style={{ cursor: "pointer", color: "#007bff" }}
//             >
//               📎
//             </span>
//           ) : (
//             "未アップロード"
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AdjustmentScreen;
