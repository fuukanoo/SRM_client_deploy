import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, SRightGridItem, InterviewItemTypography, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";


function OfferInterviewScreen({ profileData, offerInterviewData, setOfferInterviewData }) {
  // 入力変更時
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferInterviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveOfferInterview = async () => {
    // profileData.id に候補者登録時のIDがセットされている前提
    const offerInterviewPayload = {
      candidate_id: profileData.id,
      interview_date: offerInterviewData.interview_date,
      interviewer: offerInterviewData.interviewer,
      result: offerInterviewData.result,              
      remarks: offerInterviewData.remarks,               
    };

    console.log("送信前のオファー面接データ:", offerInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/offer_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(offerInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("オファー面接データ登録成功", data);
        // 必要に応じて、成功時の通知表示や画面遷移の処理を追加
      } else {
        console.error("オファー面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <SMaxContainer maxWidth={false} disableGutters>
      <SCard>
        <Grid
          container
          spacing={0}
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ height: "100%" }}
        >
        {/* 左カラム: 実施日～カルチャー */}
        <SLeftGridItem item xs={12} md={4}>
            <SItemsBox>
                {/* 実施日（type="date"） */}
                <SEachItemBox>
                    <InterviewItemTypography>実施日</InterviewItemTypography>
                    <TextField
                        type="date"
                        sx={{ width: 180 }}
                        name="interview_date"
                        value={offerInterviewData.interview_date || ""}
                        onChange={handleInputChange}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </SEachItemBox>

                {/*　担当者 */}
                <SEachItemBox>
                    <InterviewItemTypography>担当者</InterviewItemTypography>
                    <TextField
                        sx={{ width: 180 }}
                        name="interviewer"
                        value={offerInterviewData.interviewer || ""}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </SEachItemBox>

                {/* 合否: プルダウン（内定など） */}
                <SEachItemBox>
                    <InterviewItemTypography>合否</InterviewItemTypography>
                    <FormControl sx={{ width: 180 }}>
                        <Select
                        name="result"
                        value={offerInterviewData.result || ""}
                        onChange={handleInputChange}
                        >
                        <MenuItem value="内定">内定</MenuItem>
                        <MenuItem value="不内定">不内定</MenuItem>
                        </Select>
                    </FormControl>
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
                value={offerInterviewData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
          </SRightGridItem>

          {/* 下部 ボタン */}
          <SBottomGrid item xs={12} md={12}>
            <SSubmitButton variant="contained" onClick={handleSaveOfferInterview}>
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default OfferInterviewScreen;
