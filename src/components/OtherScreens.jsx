import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, InterviewItemTypography, SRightGridItem, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";
import { useParams } from "react-router-dom";

function OtherScreens({ profileData, followupDataMap, setFollowupDataMap }) {
  const { followupId } = useParams();

  const currentFollowupData = followupDataMap[followupId] || {
    interview_date: "",
    interviewer: "",
    remarks: ""
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFollowupDataMap((prev) => ({
      ...prev,
      [followupId]: {
        ...currentFollowupData,
        [name]: value,
      },
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveFollowup = async () => {
    // profileData.id に候補者登録後のIDがセットされている前提
    const followupPayload = {
      candidate_id: profileData.id,
      interview_date: currentFollowupData.interview_date,
      interviewer: currentFollowupData.interviewer,
      remarks: currentFollowupData.remarks,
    };

    console.log("送信前のフォロー面談データ:", followupPayload);
    try {
      const response = await fetch("http://localhost:3001/followup_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(followupPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("フォロー面談データ登録成功", data);
        // 必要に応じて、成功時の通知表示や画面遷移の処理を追加
      } else {
        console.error("フォロー面談データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <SMaxContainer maxWidth={false} disableGutters>
      <SCard>
        <Grid container
          spacing={0}
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ height: "100%" }}
        >
          {/* 左カラム: 実施日～カルチャー */}
          <SLeftGridItem item xs={12} md={4}>
          <SItemsBox>
            {/* 実施日 */}
            <SEachItemBox>
              <InterviewItemTypography>実施日</InterviewItemTypography>
              <TextField
                type = "date"
                sx={{ width: 180 }}
                name="interview_date"
                value={currentFollowupData.interview_date || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
            {/*　担当者 */}
            <SEachItemBox>
              <InterviewItemTypography>担当者</InterviewItemTypography>
              <TextField
                sx={{ width: 180 }}
                name="interviewer"
                value={currentFollowupData.interviewer || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
          </SItemsBox>
          </SLeftGridItem>

          {/* 右カラム: 備考 */}
          <SRightGridItem item xs={12} md={8}>
            <SNoteBox>
              <Typography variant="h6" gutterBottom>
                備考
              </Typography>
              <TextField
                fullWidth
                name="remarks"
                value={currentFollowupData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
          </SRightGridItem>

          {/* 下部 ボタン */}
          <SBottomGrid item xs={12} md={12}>
            <SSubmitButton variant="contained" onClick={handleSaveFollowup}>
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default OtherScreens;
