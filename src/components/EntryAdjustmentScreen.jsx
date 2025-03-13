import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

function EntryAdjustmentScreen({ profileData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>

      {/* 写真表示 */}
      {/* <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box
          sx={{
            width: 120,
            height: 160,
            backgroundColor: "#e0e0e0",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #ccc",
            mr: 2,
          }}
        >
          {!photoPreviewUrl && (
            <Typography variant="body2" align="center">
              写真未挿入
            </Typography>
          )}
        </Box>
      </Box> */}

      {/* エントリー情報 */}
      {/* <Box sx={{ pl: 1 }}>
        <Typography variant="body1">
          <strong>氏名:</strong> {profileData.name || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>フリガナ:</strong> {profileData.furigana || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>最終学歴:</strong> {profileData.education || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>職務経歴:</strong> {profileData.career || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>履歴書:</strong>{" "}
          {profileData.resume ? (
            <Link
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.resume);
                window.open(fileURL, "_blank");
              }}
              sx={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </Link>
          ) : (
            "未アップロード"
          )}
        </Typography>
        <Typography variant="body1">
          <strong>職務経歴書:</strong>{" "}
          {profileData.careerSheet ? (
            <Link
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.careerSheet);
                window.open(fileURL, "_blank");
              }}
              sx={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </Link>
          ) : (
            "未アップロード"
          )}
        </Typography>
      </Box> */}
    </Container>
  );
}

export default EntryAdjustmentScreen;
