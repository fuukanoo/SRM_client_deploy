import React, { useState } from "react";
import { Grid, Typography, TextField, FormControl, Select, MenuItem, Box, InputLabel } from "@mui/material";
import { SAdjustmentContainer, SAdjustmentBox } from "../styles/InterviewAdjustment-Styledcomponents";

function FirstInterviewAdjustmentScreen({ profileData, casualData, firstInterviewData }) {

  const [status, setStatus] = useState("");
  
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

    return (
      <SAdjustmentContainer>
        <Grid container spacing={4}>
          {/* カジュアル面談結果 */}
          <Grid item xs={12} md={3}>
          {/* カジュアル画面の情報 */}
          <Box>
            <Typography variant="h5" gutterBottom>
              カジュアル
            </Typography>
            <Typography variant="body1">
              <strong>実施日:</strong> {casualData.interview_date || "未入力"}
            </Typography>
            <Typography variant="body1">
              <strong>担当者:</strong> {casualData.interviewer || "未入力"}
            </Typography>
            <Typography variant="body1">
              <strong>合否:</strong> {casualData.result || "未入力"}
            </Typography>
            <Typography variant="body1">
              <strong>人間性:</strong> {casualData.personality || "未入力"}
            </Typography>
            <Typography variant="body1">
              <strong>性格:</strong> {casualData.character || "未入力"}
            </Typography>
            <Typography variant="body1">
              <strong>備考:</strong> {casualData.remarks || "未入力"}
            </Typography>
          </Box>
          </Grid>
  
          {/* 1次面接結果 */}
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h5" gutterBottom>
                1次面接
              </Typography>
              <Typography variant="body1">
                <strong>実施日:</strong>{" "}
                {firstInterviewData.interview_date || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>担当者:</strong>{" "}
                {firstInterviewData.interviewer || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>合格:</strong>{" "}
                {firstInterviewData.result || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>スキル:</strong>{" "}
                {firstInterviewData.skill || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>人間性:</strong>{" "}
                {firstInterviewData.personality || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>性格:</strong>{" "}
                {firstInterviewData.character || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>価値観:</strong>{" "}
                {firstInterviewData.values || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>カルチャー:</strong>{" "}
                {firstInterviewData.culture || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>備考:</strong>{" "}
                {firstInterviewData.remarks || "未入力"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <SAdjustmentBox>
          <FormControl sx={{ width: 180, backgroundColor: "white" }}>
            <InputLabel id="status-label">案内中/設定済み</InputLabel>
            <Select
              labelId="status-label"
              name="Adjustment"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="案内中">案内中</MenuItem>
              <MenuItem value="設定済み">設定済み</MenuItem>
            </Select>
          </FormControl>
        </SAdjustmentBox>   
      </SAdjustmentContainer>
    );
}

export default FirstInterviewAdjustmentScreen;
